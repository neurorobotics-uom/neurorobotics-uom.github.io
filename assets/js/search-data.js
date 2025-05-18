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
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "facilities-bambu-lab-x1-carbon-combo",
          title: 'Bambu Lab X1 - Carbon Combo',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/facilities/10_facilities/";
            },},{id: "facilities-franka-research-3",
          title: 'Franka Research 3',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/facilities/1_facilities/";
            },},{id: "facilities-106-channel-functional-near-infrared-spectroscopy",
          title: '106 Channel Functional Near-infrared Spectroscopy',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/facilities/2_facilities/";
            },},{id: "facilities-transcranial-magnetic-stimulation-tms",
          title: 'Transcranial Magnetic Stimulation (TMS)',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/facilities/3_facilities/";
            },},{id: "facilities-16-channel-eeg-gtec-usbamp",
          title: '16 Channel EEG Gtec USBamp',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/facilities/4_facilities/";
            },},{id: "facilities-delsys-trigno-wireless-emg-system",
          title: 'Delsys Trigno™ Wireless EMG System',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/facilities/5_facilities/";
            },},{id: "facilities-vicon-motion-capture-system",
          title: 'Vicon Motion Capture System',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/facilities/6_facilities/";
            },},{id: "facilities-amti-multi-axis-force-plates",
          title: 'AMTI Multi Axis Force Plates',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/facilities/7_facilities/";
            },},{id: "facilities-color-clibration-tool-datacolor-spyder",
          title: 'Color Clibration Tool Datacolor Spyder',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/facilities/8_facilities/";
            },},{id: "facilities-transcranial-direct-current-stimulation-tdcs",
          title: 'Transcranial direct current stimulation (tDCS)',
          description: "",
          section: "Facilities",handler: () => {
              window.location.href = "/facilities/9_facilities/";
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
            },},{id: "projects-freephri-flexible-robust-and-efficient-physical-human-robot-interaction-with-iterative-learning-and-self-triggered-role-adaption",
          title: 'FREEpHRI: Flexible, Robust and Efficient physical Human-robot Interaction with iterative learning and self-triggered...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-a-novel-robotic-navigation-system-for-precise-transcranial-magnetic-brain-stimulation",
          title: 'A novel robotic navigation system for precise transcranial magnetic brain stimulation',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-pro-rehab-personalized-musculoskeletal-model-for-safety-critical-robot-assisted-ankle-rehabilitation",
          title: 'PRO-Rehab: Personalized musculoskeletal model for safety-critical RObot-assisted ankle Rehabilitation',
          description: "",
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
