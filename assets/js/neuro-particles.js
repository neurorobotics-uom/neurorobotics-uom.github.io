document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('neuroCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // 1. 动态获取 CSS 变量颜色
    // Function to update colors based on current theme
    let themeColor, textColor;
    
    function updateColors() {
        const styles = getComputedStyle(document.documentElement);
        themeColor = styles.getPropertyValue('--global-theme-color').trim() || '#b509ac';
        // Use text color for particles to ensure visibility in both light and dark modes
        textColor = styles.getPropertyValue('--global-text-color').trim() || '#000000';
    }
    
    updateColors();

    let width, height;
    let particles = [];
    let signals = []; 
    
    // Dynamic parameters based on screen size
    let particleCount; 
    let connectionDistance;
    const mouseRadius = 200;

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
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;

        // Calculate density based on screen area
        // Standard reference: 1440x900 (Desktop) -> ~80 particles
        const area = width * height;
        particleCount = Math.floor(area / 16000);
        
        // Clamp count to reasonable limits to ensure visibility without overcrowding
        if (particleCount < 40) particleCount = 40; // Minimum for mobile
        if (particleCount > 100) particleCount = 100; // Maximum for large screens

        // Adjust connection distance based on screen size
        // Standard reference: ~150px
        connectionDistance = Math.min(width, height) * 0.15;
        if (connectionDistance < 100) connectionDistance = 100; // Min distance
        if (connectionDistance > 160) connectionDistance = 160; // Max distance

        initParticles();
    }

    window.addEventListener('resize', resize);
    // 使用 window 监听鼠标，因为 canvas 设置了 pointer-events: none
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    // Scroll interaction
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const deltaY = currentScrollY - lastScrollY;
        lastScrollY = currentScrollY;
        
        // Move particles opposite to scroll direction to simulate being attached to the page
        particles.forEach(p => {
            p.y -= deltaY; 
        });
    });

    class Particle {
        constructor() {
            this.init();
        }

        init() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 2.5 + 1.5;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            
            // Wrap around vertically for continuous scrolling feel
            if (this.y < 0) this.y += height;
            if (this.y > height) this.y -= height;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            // Use dynamic text color with low opacity for subtle effect
            ctx.fillStyle = hexToRgba(textColor, 0.25); 
            ctx.fill();
        }
    }

    function drawScene() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectionDistance) {
                    const alpha = (1 - dist / connectionDistance) * 0.25;
                    ctx.lineWidth = 0.8;
                    // Use dynamic text color for lines as well
                    ctx.strokeStyle = hexToRgba(textColor, alpha); 
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();

                    // 信号脉冲：使用主题色
                    if (Math.random() > 0.999) {
                        signals.push({
                            from: particles[i],
                            to: particles[j],
                            pos: 0,
                            speed: 0.01 + Math.random() * 0.01
                        });
                    }
                }
            }

            // 鼠标交互：使用主题色
            if (mouse.x !== null) {
                const dx = particles[i].x - mouse.x;
                const dy = particles[i].y - mouse.y;
                const mDist = Math.sqrt(dx * dx + dy * dy);

                if (mDist < mouseRadius) {
                    const mAlpha = (1 - mDist / mouseRadius) * 0.5;
                    ctx.lineWidth = 1.2;
                    // 动态调用你的 CSS 变量颜色
                    ctx.strokeStyle = hexToRgba(themeColor, mAlpha); 
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                    
                    ctx.beginPath();
                    ctx.arc(particles[i].x, particles[i].y, particles[i].radius * 1.5, 0, Math.PI * 2);
                    ctx.fillStyle = hexToRgba(themeColor, mAlpha);
                    ctx.fill();
                }
            }
        }

        // 绘制脉冲信号
        signals = signals.filter(s => {
            s.pos += s.speed;
            if (s.pos >= 1) return false;

            const sx = s.from.x + (s.to.x - s.from.x) * s.pos;
            const sy = s.from.y + (s.to.y - s.from.y) * s.pos;

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
