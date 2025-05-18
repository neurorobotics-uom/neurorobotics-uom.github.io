// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "People",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-researches",
          title: "Researches",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/researches/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-facilities",
          title: "Facilities",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/facilities/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "facilities-franka-research-3",
          title: 'Franka Research 3',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/facilities/1_facilities/";
            },},{id: "news-our-paper-imtp-intention-matching-trajectory-prediction-for-autonomous-vehicles-received-best-paper-award-at-proceedings-of-the-2023-29th-international-conference-on-mechatronics-and-machine-vision-in-practice-m2vip",
          title: 'Our paper “IMTP: Intention-Matching Trajectory Prediction for Autonomous Vehicles” received Best Paper Award...',
          description: "",
          section: "News",},{id: "news-our-paper-distributed-collision-free-bearing-coordination-of-multi-uav-systems-with-actuator-faults-and-time-delays-was-accepted-by-ieee-transactions-on-intelligent-transportation-systems",
          title: 'Our paper “Distributed Collision-Free Bearing Coordination of Multi-UAV Systems With Actuator Faults and...',
          description: "",
          section: "News",},{id: "news-our-paper-precision-robotic-assembly-of-industrial-components-with-robust-pose-estimation-and-cooperative-manipulation-was-selected-to-the-finalist-of-best-paper-award-at-proceedings-of-the-2024-ieee-international-conference-on-industrial-technology-icit",
          title: 'Our paper “Precision Robotic Assembly of Industrial Components with Robust Pose Estimation and...',
          description: "",
          section: "News",},{id: "news-our-paper-a-twisting-mechanism-with-parallel-springs-for-series-variable-stiffness-actuator-was-accepted-by-ieee-asme-transactions-on-mechatronics",
          title: 'Our paper “A Twisting Mechanism With Parallel Springs for Series Variable Stiffness Actuator”...',
          description: "",
          section: "News",},{id: "news-our-paper-a-survey-of-multi-agent-systems-on-distributed-formation-control-was-accepted-by-unmanned-systems",
          title: 'Our paper “A Survey of Multi-Agent Systems on Distributed Formation Control” was accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-progressive-learning-based-assist-as-needed-control-for-ankle-rehabilitation-was-accepted-by-ieee-transactions-on-cognitive-and-developmental-systems",
          title: 'Our paper “Progressive-Learning-Based Assist-as-Needed Control for Ankle Rehabilitation” was accepted by IEEE Transactions...',
          description: "",
          section: "News",},{id: "news-our-paper-improvement-of-error-related-potential-monitoring-in-brain-computer-interface-based-on-optimal-feature-dimensionality-selection-was-accepted-by-ieee-sensors-journal",
          title: 'Our paper “Improvement of error-related potential monitoring in brain-computer interface based on optimal...',
          description: "",
          section: "News",},{id: "news-dr-li-served-as-organizing-chair-for-30th-international-conference-on-mechatronics-and-machine-vision-in-practice-m2vip-2024",
          title: 'Dr. Li served as Organizing Chair for 30th International Conference on Mechatronics and...',
          description: "",
          section: "News",},{id: "news-dr-li-served-as-technical-committee-for-ieee-international-conference-on-omni-layer-intelligent-systems-2025",
          title: 'Dr. Li served as Technical Committee for IEEE International Conference on Omni-layer Intelligent...',
          description: "",
          section: "News",},{id: "news-dr-li-joined-academic-committee-of-the-ieee-uk-and-ireland-robotics-amp-amp-autonomous-systems-chapter",
          title: 'Dr. Li joined Academic Committee of the IEEE UK and Ireland Robotics &amp;amp;amp;...',
          description: "",
          section: "News",},{id: "news-dr-li-served-as-organizing-committee-for-ieee-international-conference-on-robotics-and-control-engineering-2025",
          title: 'Dr. Li served as Organizing Committee for IEEE International Conference on Robotics and...',
          description: "",
          section: "News",},{id: "news-dr-li-served-as-poster-chair-for-8th-annual-ieee-uk-and-ireland-robotics-and-automation-society-chapter-conference-2025",
          title: 'Dr. Li served as Poster Chair for 8th Annual IEEE UK and Ireland...',
          description: "",
          section: "News",},{id: "news-dr-li-served-as-local-arrangement-chair-for-ieee-international-conference-on-advanced-robotics-and-mechatronics-2025",
          title: 'Dr. Li served as Local Arrangement Chair for IEEE International Conference on Advanced...',
          description: "",
          section: "News",},{id: "news-dr-li-served-as-workshop-chair-for-31th-international-conference-on-mechatronics-and-machine-vision-in-practice-m2vip-2025",
          title: 'Dr. Li served as Workshop Chair for 31th International Conference on Mechatronics and...',
          description: "",
          section: "News",},{id: "news-we-organized-a-special-issue-on-intelligent-rehabilitation-technology-incorporating-multimodal-information-feedback-and-stimulation-in-frontiers-in-bioengineering-and-biotechnology",
          title: 'We organized a special issue on “Intelligent Rehabilitation Technology Incorporating Multimodal Information Feedback...',
          description: "",
          section: "News",},{id: "news-dr-li-was-elected-as-a-senior-member-of-the-ieee",
          title: 'Dr. Li was elected as a Senior Member of the IEEE.',
          description: "",
          section: "News",},{id: "people-chaoyuan-liang",
          title: 'Chaoyuan Liang',
          description: "fNIRS",
          section: "People",handler: () => {
              window.location.href = "/people/chaoyuan_liang/";
            },},{id: "people-wending-heng",
          title: 'Wending Heng',
          description: "EMG",
          section: "People",handler: () => {
              window.location.href = "/people/wending_heng/";
            },},{id: "people-wenzhi-bai",
          title: 'Wenzhi Bai',
          description: "Robo-TMS",
          section: "People",handler: () => {
              window.location.href = "/people/wenzhi_bai/";
            },},{id: "people-zhenhong-li",
          title: 'Zhenhong Li',
          description: "Lecturer in Robotics and Control",
          section: "People",handler: () => {
              window.location.href = "/people/zhenhong_li/";
            },},{id: "people-ziwen-wang",
          title: 'Ziwen Wang',
          description: "EEG",
          section: "People",handler: () => {
              window.location.href = "/people/ziwen_wang/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "researches-research-1",
          title: 'research 1',
          description: "with background image",
          section: "Researches",handler: () => {
              window.location.href = "/researches/1_research/";
            },},{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://alvishub.github.io/", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%65%6E%68%6F%6E%67.%6C%69@%6D%61%6E%63%68%65%73%74%65%72.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/neurorobotics-uom", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
