---
#layout: about
layout: about_banner
banner: "/assets/img/web_banner.jpg"   #this does not specify the lcoation of top banner, the lcoation need to be set in _custom this just can not be empty.
banner_title:    "Advancing intuitive human–machine interfaces and personalized robotic interventions through interdisciplinary innovation"
banner_subline:  ""
title: About
permalink: /
subtitle:
hire_banner_title: "We are looking for enthusiastic candidates to conduct PhD research. If you are interested in joining us, please contact zhenhong.li@manchester.ac.uk"


# profile:
#   align: right
#   image: lab_logo_black.png
#   image_light: lab_logo_black.png
#   image_dark: lab_logo_white.png
#   image_circular: false # crops the image to make it circular
#   # more_info: >
#   #   <p>555 your office number</p>
#   #   <p>123 your address street</p>
#   #   <p>Your City, State 12345</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 8 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts


---


<div class="row g-4 align-items-start mb-4">
  <div class="col-12 col-md-6 col-lg-7">
    <p>
      Welcome to the Neurorobotics Lab (NRL) at the University of Manchester. Led by <a href="https://zhenhong-li.github.io/">Dr. Zhenhong Li</a>, we conduct research at the intersection of neuroscience, biomechanics, and robotics, with a focus on brain-computer interfaces, neuromusculoskeletal modeling, and robot-assisted interventions. We aim to understand human neuromechanical function, advance physiological signal processing, and develop intelligent control systems for assistive and medical robots. Our mission is to develop human-centered assistive and rehabilitative technologies to improve quality of life through interdisciplinary innovation.
    </p>

    <p class="mb-0">
      We welcome students from a wide range of backgrounds: biomedical engineering, mechanical engineering, computer science, control engineering, and robotics.
    </p>
  </div>

  <div class="col-12 col-md-6 col-lg-5">
    <div class="rounded shadow-sm" style="overflow: hidden; background: #000;">
      <div style="position: relative; width: 100%; padding-bottom: 56.25%;">
        <iframe
          src="https://www.youtube.com/embed/gfaahQwC0yM?vq=hd1440&hd=1&playsinline=1&rel=0"
          title="Neurorobotics Lab video"
          style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0;"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</div>

<!-- Swiper CSS: 使用 Liquid 标签修复路径 -->   
<link rel="stylesheet" href="{{ '/assets/css/swiper-bundle.min.css' | relative_url }}"/>

<!-- Swiper JS: 使用 Liquid 标签修复路径 -->
<script src="{{ '/assets/js/swiper-bundle.min.js' | relative_url }}"></script>

<script>
  // 关键修复：等待 DOM 加载完毕
  document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.mySwiper', {
      // 关键修复：添加观察者，解决加载时样式未就绪导致的问题
      observer: true,
      observeParents: true,

      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      speed: 1000, 
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      // 注意：如果使用了 fade 效果，cubeEffect 和 coverflowEffect 通常会被忽略或导致冲突，建议注释掉不使用的效果参数保持配置整洁
      /* 
      cubeEffect: { ... },
      coverflowEffect: { ... } 
      */
    });
  });
</script>