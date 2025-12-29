document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('neuroCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // 1. 动态获取 CSS 变量颜色
    // Function to update colors based on current theme
    let themeColor, textColor;
    let themeColorRgb = '181, 9, 172'; // Default RGB string
    
    function updateColors() {
        const styles = getComputedStyle(document.documentElement);
        themeColor = styles.getPropertyValue('--global-theme-color').trim() || '#b509ac';
        // Use text color for particles to ensure visibility in both light and dark modes
        textColor = styles.getPropertyValue('--global-text-color').trim() || '#000000';
        
        // Pre-calculate RGB string for theme color to avoid regex in loop
        if (themeColor.startsWith('#')) {
            let c = themeColor.substring(1).split('');
            if(c.length== 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            themeColorRgb = [(c>>16)&255, (c>>8)&255, c&255].join(',');
        } else if (themeColor.startsWith('rgb')) {
            themeColorRgb = themeColor.match(/\d+, \d+, \d+/)[0];
        }
    }
    
    updateColors();

    let width, height;
    let particles = [];
    let signals = []; 
    
    // Dynamic parameters based on screen size
    let particleCount; 
    let connectionDistance;
    const mouseRadius = 200;
    
    // Content boundaries
    let contentLeft = 0;
    let contentRight = 0;

    let mouse = { x: null, y: null };

    // 辅助函数：将 hex 颜色转换为 rgba
    function hexToRgba(hex, alpha) {
        let c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            c= hex.substring(1).split('');
            if(c.length== 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+alpha+')';
        }
        // Handle rgb/rgba strings if necessary, or fallback
        if (hex.startsWith('rgb')) {
            // If it's already rgba, replace the alpha
            if (hex.startsWith('rgba')) {
                return hex.replace(/[\d\.]+\)$/, `${alpha})`);
            }
            return hex.replace(')', `, ${alpha})`).replace('rgb', 'rgba');
        }
        return `rgba(181, 9, 172, ${alpha})`; // 默认回退颜色
    }

    function initParticles() {
        particles = [];
        const minDistance = 30; // Minimum distance between particles to prevent overcrowding
        
        for (let i = 0; i < particleCount; i++) {
            let p = new Particle();
            let attempts = 0;
            let valid = false;
            
            // Try to place particle such that it's not too close to others
            while (!valid && attempts < 15) {
                valid = true;
                for (let j = 0; j < particles.length; j++) {
                    const other = particles[j];
                    const dx = p.x - other.x;
                    const dy = p.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < minDistance) {
                        valid = false;
                        break;
                    }
                }
                
                if (!valid) {
                    p.init(); // Re-randomize position
                    attempts++;
                }
            }
            
            if (valid) {
                particles.push(p);
            }
        }
    }

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;

        // Calculate content boundaries to avoid text
        // Try to find the main content container
        const container = document.querySelector('.container[role="main"]') || document.querySelector('.container');
        
        if (container) {
            const rect = container.getBoundingClientRect();
            // rect.left is relative to viewport, which is what we want for fixed canvas
            contentLeft = rect.left;
            contentRight = rect.right;
        } else {
            // Fallback: assume 90% width centered
            const contentWidth = Math.min(width * 0.9, 1140);
            contentLeft = (width - contentWidth) / 2;
            contentRight = contentLeft + contentWidth;
        }

        // Calculate density based on MARGIN area, not total area
        const marginArea = (contentLeft * height) + ((width - contentRight) * height);
        
        // Use a slightly higher density for margins since they are narrow strips
        particleCount = Math.floor(marginArea / 8000); 
        
        // Clamp count
        if (particleCount < 10) particleCount = 0; // If margins are too small, no particles
        if (particleCount > 150) particleCount = 150; 

        // Adjust connection distance based on screen size
        connectionDistance = Math.min(width, height) * 0.25;
        if (connectionDistance < 120) connectionDistance = 120; // Min distance
        if (connectionDistance > 220) connectionDistance = 220; // Max distance

        initParticles();
    }

    window.addEventListener('resize', resize);
    // 使用 window 监听鼠标，因为 canvas 设置了 pointer-events: none
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    // Scroll interaction
    // Removed event listener based scroll update to prevent lag/jitter.
    // Instead, we will calculate the visual position based on window.scrollY in the draw loop.

    class Particle {
        constructor() {
            this.init();
        }

        init() {
            // Randomly choose left or right margin
            const side = Math.random() > 0.5 ? 'left' : 'right';
            
            // Ensure we have space
            if (side === 'left' && contentLeft > 10) {
                 this.x = Math.random() * contentLeft;
            } else if (side === 'right' && (width - contentRight) > 10) {
                 this.x = contentRight + Math.random() * (width - contentRight);
            } else {
                 // If one side is too small, try the other
                 if (contentLeft > 10) this.x = Math.random() * contentLeft;
                 else if ((width - contentRight) > 10) this.x = contentRight + Math.random() * (width - contentRight);
                 else this.x = -100; // Hide if no space
            }

            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 3 + 2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Strict boundary enforcement
            // If particle wanders into the content area, push it out
            if (this.x > contentLeft && this.x < contentRight) {
                // Push to the nearest side
                if (Math.abs(this.x - contentLeft) < Math.abs(this.x - contentRight)) {
                    this.x = contentLeft - 1;
                    this.vx = -Math.abs(this.vx); // Force move left
                } else {
                    this.x = contentRight + 1;
                    this.vx = Math.abs(this.vx); // Force move right
                }
            }

            // Screen boundaries
            if (this.x < 0) { this.vx *= -1; this.x = 0; }
            if (this.x > width) { this.vx *= -1; this.x = width; }
            
            // Wrap around vertically for continuous scrolling feel
            if (this.y < 0) this.y += height;
            if (this.y > height) this.y -= height;
        }

        // Calculate visible Y position based on scroll
        getVisibleY() {
            const scrollY = window.scrollY;
            // Calculate offset: move particles up as we scroll down
            // Use double modulo to handle negative numbers correctly
            let visibleY = ((this.y - scrollY) % height + height) % height;
            return visibleY;
        }

        draw(visibleY) {
            ctx.beginPath();
            ctx.arc(this.x, visibleY, this.radius, 0, Math.PI * 2);
            // Use theme color for a softer, unified look
            ctx.fillStyle = hexToRgba(themeColor, 0.4); 
            ctx.fill();
        }
    }

    function drawScene() {
        ctx.clearRect(0, 0, width, height);
        
        const scrollY = window.scrollY;
        const connectionDistSq = connectionDistance * connectionDistance;

        // Pre-calculate visible Y positions for all particles
        particles.forEach(p => {
            p.update();
            // Calculate offset: move particles up as we scroll down
            // Use double modulo to handle negative numbers correctly
            p.visibleY = ((p.y - scrollY) % height + height) % height;
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.visibleY, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${themeColorRgb}, 0.4)`; 
            ctx.fill();
        });

        for (let i = 0; i < particles.length; i++) {
            const p1 = particles[i];

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];

                // Check distance with visible coordinates
                const dx = p1.x - p2.x;
                
                // Quick check for X distance
                if (Math.abs(dx) > connectionDistance) continue;

                const dy = p1.visibleY - p2.visibleY;
                
                // If vertical distance is too large (due to wrapping), skip connection
                if (Math.abs(dy) > connectionDistance) continue;

                // Use squared distance to avoid expensive sqrt
                const distSq = dx * dx + dy * dy;

                if (distSq < connectionDistSq) {
                    const dist = Math.sqrt(distSq);
                    const alpha = (1 - dist / connectionDistance) * 0.3;
                    ctx.lineWidth = 1.0;
                    // Use pre-calculated RGB string
                    ctx.strokeStyle = `rgba(${themeColorRgb}, ${alpha})`; 
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.visibleY);
                    ctx.lineTo(p2.x, p2.visibleY);
                    ctx.stroke();

                    // 信号脉冲：已关闭
                    /*
                    if (Math.random() > 0.999) {
                        signals.push({
                            from: p1,
                            to: p2,
                            pos: 0,
                            speed: 0.01 + Math.random() * 0.01
                        });
                    }
                    */
                }
            }

            // 鼠标交互：使用主题色
            if (mouse.x !== null) {
                const dx = p1.x - mouse.x;
                const dy = p1.visibleY - mouse.y;
                const distSq = dx * dx + dy * dy;
                const mouseRadiusSq = mouseRadius * mouseRadius;

                if (distSq < mouseRadiusSq) {
                    const mDist = Math.sqrt(distSq);
                    const mAlpha = (1 - mDist / mouseRadius) * 0.5;
                    ctx.lineWidth = 1.2;
                    // 动态调用你的 CSS 变量颜色
                    ctx.strokeStyle = `rgba(${themeColorRgb}, ${mAlpha})`; 
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.visibleY);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                    
                    ctx.beginPath();
                    ctx.arc(p1.x, p1.visibleY, p1.radius * 1.5, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${themeColorRgb}, ${mAlpha})`;
                    ctx.fill();
                }
            }
        }

        // 绘制脉冲信号
        signals = signals.filter(s => {
            s.pos += s.speed;
            if (s.pos >= 1) return false;

            // Calculate visible positions for signal
            // Use cached visibleY if available, or recalculate if needed (though signals are disabled now)
            const p1y = s.from.visibleY !== undefined ? s.from.visibleY : s.from.getVisibleY();
            const p2y = s.to.visibleY !== undefined ? s.to.visibleY : s.to.getVisibleY();
            
            // If the connection is broken visually (wrapped), don't draw signal
            if (Math.abs(p1y - p2y) > connectionDistance) return false;

            const sx = s.from.x + (s.to.x - s.from.x) * s.pos;
            const sy = p1y + (p2y - p1y) * s.pos;

            ctx.beginPath();
            ctx.arc(sx, sy, 2, 0, Math.PI * 2);
            ctx.fillStyle = themeColor; 
            ctx.fill();
            return true;
        });

        requestAnimationFrame(drawScene);
    }

    resize();
    // Particles are initialized inside resize()
    drawScene();
    
    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class' || mutation.attributeName === 'data-theme') {
                updateColors();
            }
        });
    });
    observer.observe(document.documentElement, { attributes: true });
});
