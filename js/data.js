const personalInfo = {
    name: "Alan Liang",
    copyright: "harrypotter.me",
    socialMedia: {
      Twitter: "https://twitter.com/",
      LinkedIn: "https://www.linkedin.com/",
      GoogleScholar: "https://scholar.google.com/citations?user=ocyBGGYAAAAJ&hl=zh-CN",
      Github: "https://github.com/AlanLiangC"
    },
    about: {
      year: "4th-year",
      department: {
        name: "Shenyang Institute of Automation",
        link: "https://sia.cas.cn/"
      },
      college: {
        name: "Chinese Academy of Sciences",
        link: "https://www.ucas.ac.cn/"
      },
      advisor: {
        name: "Prof. Huaici Zhao",
        link: "https://people.ucas.edu.cn/~zhaohuaici1"
      },
      email: "liangao@sia.cn | a_liang@u.nus.edu",
      interest:
        "I focus on 3D/4D perception for autonomous driving and robotics. I develop robust yet lightweight models to meet unmanned systems’ strict safety and real-time requirements. Lately, I’m hooked on 3D/4D generation, using synthetic data to replace tedious collection and annotation. My goal: Generate data more realistic than reality itself and free researchers from grunt work.",
      visiting: {
        text: "Now, I am a visiting student at NUS advised by",
        ooi: {
          name: "Prof. Wei Tsang Ooi",
          link: "https://www.comp.nus.edu.sg/cs/people/ooiwt/"
        }
      },
    },
    acknowledgmentsHtml: `
    <div class="text-sm text-gray-400">
      Since October 2024, I have been funded by the
      <a href="https://www.csc.edu.cn/" target="_blank" rel="noopener noreferrer"><strong><u>China Scholarship Council (CSC)</u></strong></a>
      to join the
      <a href="https://www.comp.nus.edu.sg/cs/" target="_blank" rel="noopener noreferrer"><strong><u>School of Computing</u></strong></a>
      at the
      <a href="https://www.nus.edu.sg/" target="_blank" rel="noopener noreferrer"><strong><u>National University of Singapore</u></strong></a>.
      I am honored to be advised by
      <a href="https://www.comp.nus.edu.sg/cs/people/ooiwt/" target="_blank" rel="noopener noreferrer"><strong><u>Prof. Wei Tsang Ooi</u></strong></a>.
      I am also fortunate to collaborate closely with
      <a href="https://ldkong.com/" target="_blank" rel="noopener noreferrer"><strong><u>Lingdong Kong</u></strong></a>
      (<a href="https://machinelearning.apple.com/work-with-us#scholars" target="_blank" rel="noopener noreferrer"><strong><u>Apple Scholar</u><img class="inline-icon" src="public/images/apple.jpg" alt="Apple Scholar"/></u></strong></a>),
      <a href="https://dylanorange.github.io/" target="_blank" rel="noopener noreferrer"><strong><u>Dongyue Lu</u></strong></a>
      ("Pineapple Scholar"<img class="inline-icon" src="public/images/pineapple.png" alt="Pineapple Scholar"/>),
      and
      <a href="https://yuyang-cloud.github.io/" target="_blank" rel="noopener noreferrer"><strong><u>Yu Yang</u></strong></a>
      ("Potato Scholar"<img class="inline-icon" src="public/images/potatoes.png" alt="Potato Scholar"/>).
    </div>`
    }

const newsItems = [
    { date:"[08/2025]", html:`Our papers <a href="https://arxiv.org/abs/2507.17664" target="_blank" rel="noopener"><strong><u>"Talk2Event"</u></strong></a>, <a href="https://arxiv.org/abs/2506.13558" target="_blank" rel="noopener"><strong><u>"X-Scene"</u></strong></a> and <a href="https://project-3eed.github.io/" target="_blank" rel="noopener"><strong><u>"3EED"</u></strong></a> are accepted by <a href="https://neurips.cc/Conferences/2025/CallForPapers" target="_blank" rel="noopener"><strong><u>NeurlPS 2025</u></strong></a>.`},
    { date:"[06/2025]", html:`<strong>Track 5: Cross-Platform 3D Object Detection</strong> of the <a href="https://robosense2025.github.io/" target="_blank" rel="noopener"><strong><u>RoboSense Challenge</u></strong></a> at <a href="https://www.iros25.org/" target="_blank" rel="noopener"><strong><u>IROS 2025</u></strong></a> is now live! See the <a href="https://robosense2025.github.io/track5" target="_blank" rel="noopener"><strong><u>track homepage</u></strong></a>, <a href="https://github.com/robosense2025/track5" target="_blank" rel="noopener"><strong><u>GitHub repo</u></strong></a>. Contact: <a href="mailto:robosense2025@gmail.com"><strong><u>robosense2025@gmail.com</u></strong></a> or my <a href="https://alanliang.vercel.app/" target="_blank" rel="noopener"><strong><u>personal page</u></strong></a>.` },
    { date:"[06/2025]", html:`We are hosting the <a href="https://robosense2025.github.io/" target="_blank" rel="noopener"><strong><u>RoboSense Challenge</u></strong></a> at <a href="https://www.iros25.org/" target="_blank" rel="noopener"><strong><u>IROS 2025</u></strong></a>.`},
    { date:"[05/2025]", html:`Our paper <a href="https://arxiv.org/abs/2507.17665" target="_blank" rel="noopener"><strong><u>"Perspective-Invariant 3D Object Detection"</u></strong></a> is accepted by <a href="https://iccv.thecvf.com/" target="_blank" rel="noopener"><strong><u>ICCV 2025</u></strong></a>.`},
  ];

const publications = [
    {
        id: 16,
        image: "public/images/publications/lidarcrafter.png",
        title: "LiDARCrafter: Dynamic 4D World Modeling from LiDAR Sequences",
        author: "Alan Liang, Youquan Liu, Yu Yang, Dongyue Lu, Linfeng Li, Lingdong Kong‡, et al.",
        conference: "Arxiv 2025",
        details: "",
        links: [{name:"pdf",url:"https://arxiv.org/abs/2508.03692"},
                {name:"code",url:"https://github.com/lidarcrafter/toolkit"},
                {name:"project", url:"https://lidarcrafter.github.io/"}]
    },
    {
        id: 15,
        image: "public/images/publications/la-la-lidar.png",
        title: "La La LiDAR: Large-Scale Layout Generation from LiDAR Data",
        author: "Youquan Liu, Lingdong Kong, Weidong Yang, Xin Li, Alan Liang, et al.",
        conference: "Arxiv 2025",
        details: "",
        links: [{name:"pdf",url:"https://arxiv.org/abs/2508.03691"},
                {name:"code",url:""},
                {name:"project", url:""}]
    },
    {
      id: 14,
      image: "public/images/publications/wild3D_workshop.png",
      title: "Learning to Generate 4D LiDAR Sequences",
      author: "Ao Liang, Youquan Liu, Yu Yang, Dongyue Lu, Linfeng Li, Lingdong Kong, Huaici Zhao, Wei Tsang Ooi",
      conference: "ICCV 2025 Wild3D Workshop",
      details: "",
      links: [{name:"pdf",url:"https://arxiv.org/abs/2509.11959"},
              {name:"code",url:""},
              {name:"project", url:""}]
  },
    {
        id: 13,
        image: "public/images/publications/veila.png",
        title: "Veila: Scaling Diffusion Models for Panoramic LiDAR Point Cloud Generation from a Single Image",
        author: "Youquan Liu, Lingdong Kong, Weidong Yang, Alan Liang, Jianxiong Gao, et al.",
        conference: "Arxiv 2025",
        details: "",
        links: [{name:"pdf",url:"https://arxiv.org/abs/2508.03690"},
                {name:"code",url:""},
                {name:"project", url:""}]
    },
    {
        id: 12,
        image: "public/images/publications/worldbench_survey.webp",
        title: "3D and 4D World Modeling: A Survey",
        author: "Lingdong Kong*, Wesley Yang*, Jianbiao Mei*, Youquan Liu*, Alan Liang*, Dekai Zhu*, Dongyue Lu*, Wei Yin*, et al.",
        conference: "Arxiv 2025",
        details: "",
        links: [{name:"pdf",url:"https://worldbench.github.io/survey.pdf"},
                {name:"code",url:"https://github.com/worldbench/survey"},
                {name:"project", url:"https://worldbench.github.io/survey"}]
    },
    {
        id: 11,
        image: "public/images/publications/see4d.png",
        title: "See4D: Pose-Free 4D Generation via Auto-Regressive Video Inpainting",
        author: "Dongyue Lu*, Alan Liang*, Tianxin Huang, Xiao Fu, Yuyang Zhao, Baorui Ma, Lingdong Kong‡, Ziwei Liu",
        conference: "Arxiv 2025",
        details: "",
        links: [{name:"pdf",url:""},
                {name:"code",url:""},
                {name:"project", url:"https://see-4d.github.io/"}]
    },
    {
      id: 10,
      image: "public/images/publications/talk2event_workshp.png",
      title: "Visual Grounding from Event Cameras",
      author: "Lingdong Kong*, Dongyue Lu*, Ao Liang*, Rong Li, Yuhao Dong, Tianshuai Hu, Lai Xing Ng, Wei Tsang Ooi, Benoit R. Cottereau",
      conference: "ICCV 2025 NeVi Workshop",
      details: "",
      links: [{name:"pdf",url:"https://arxiv.org/abs/2509.09584"},
              {name:"code",url:""},
              {name:"project", url:""}]
  },
    { 
        id:9, 
        image:"public/images/publications/xscene.png", 
        author:"Yu Yang, Alan Liang, Jianbiao Mei, Yukai Ma, Yong Liu, Gim Hee Lee", 
        title:"𝒳-Scene: Large-Scale Driving Scene Generation with High Fidelity and Flexible Controllability", 
        conference:"NeurlPS 2025 (Poster)", 
        details:"", 
        links:[{name:"pdf",url:"https://arxiv.org/abs/2506.13558"},
                {name:"code",url:"https://x-scene.github.io/"},
                {name:"project",url:"https://x-scene.github.io/"}]
    },
    { id:8, image:"public/images/publications/talk2event.png", author:"Lingdong Kong*, Dongyue Lu*, Alan Liang*, Rong Li, Yuhao Dong, Tianshuai Hu, Lai Xing Ng, Wei Tsang Ooi, Benoit R. Cottereau", title:"Talk2Event: Grounded Understanding of Dynamic Scenes from Event Cameras", conference:"NeurlPS 2025 (Spotlight)", details:"", links:[{name:"pdf",url:"https://arxiv.org/abs/2507.17664"},{name:"code",url:""},{name:"project",url:"https://talk2event.github.io/"}]},
    { id:7, image:"public/images/publications/3eed.jpg", author:"Rong Li*, Yuhao Dong*, Tianshuai Hu*, Alan Liang*, Youquan Liu*, Dongyue Lu*, Liang Pan, Lingdong Kong‡, Junwei Liang, Ziwei Liu", title:"3EED: Ground Everything Everywhere in 3D", conference:"NeurlPS 2025 DB Track (Poster)", details:"", links:[{name:"pdf",url:""},{name:"code",url:"https://rongli.tech/"},{name:"project",url:"https://project-3eed.github.io/"}]},
    {   id:6, 
        image:"public/images/publications/pi3det.jpg", 
        author:"Alan Liang*, Lingdong Kong*, Dongyue Lu*, Youquan Liu, Jian Fang, Huaici Zhao, Wei Tsang Ooi", 
        title:"Perspective-Invariant 3D Object Detection", 
        conference:"International Conference on Computer Vision", details:" (ICCV 2025)", links:[{name:"pdf",url:"https://robosense2025.github.io/track5"},{name:"code",url:"https://github.com/robosense2025/track5"},{name:"project",url:"https://robosense2025.github.io/"}]},
    { id:5, image:"public/images/publications/sgccnet.png", author:"Alan Liang, Wenyu Chen, Jian Fang, Huaici Zhao", title:"SGCCNet: Single-Stage 3D Object Detector With Saliency-Guided Data Augmentation and Confidence Correction Mechanism", conference:"Arxiv 2024", details:"", links:[{name:"pdf",url:"https://arxiv.org/abs/2407.01239"},{name:"code",url:"https://github.com/AlanLiangC/SGCCNet"},{name:"project",url:"https://github.com/AlanLiangC/SGCCNet"}]},
    { id:4, image:"public/images/publications/pdmssd.png", author:"Alan Liang, Haiyang Hua, Jian Fang, Wenyu Chen, Huaici Zhao", title:"PDM-SSD: Single-Stage Three-Dimensional Object Detector With Point Dilation", conference:"Arxiv 2024", details:"", links:[{name:"pdf",url:"https://arxiv.org/abs/2502.07822"},{name:"code",url:"https://github.com/AlanLiangC/PDM-SSD"},{name:"project",url:"https://github.com/AlanLiangC/PDM-SSD"}]},
    { id:3, image:"public/images/publications/suprnet.png", author:"Alan Liang, Wenyu Chen, Jian Fang, Huaici Zhao", title:"SuPrNet: Super Proxy for 4D occupancy forecasting", conference:"Knowledge-Based Systems", details:" (CAS 1st TOP Quartile, IF: 7.2)", links:[{name:"pdf",url:"https://www.sciencedirect.com/science/article/pii/S0950705124009663"},{name:"code",url:"https://github.com/AlanLiangC/4DPCF"},{name:"project",url:"https://github.com/AlanLiangC/4DPCF"}]},
    { id:2, image:"public/images/publications/spsnet.png", author:"Alan Liang, Hao Zhang, Haiyang Hua, Wenyu Chen, Huaici Zhao", title:"SPSNet: Boosting 3D point-based object detectors with stable point sampling", conference:"Engineering Applications of Artificial Intelligence", details:" (CAS 1st TOP Quartile, IF: 7.5)", links:[{name:"pdf",url:"https://www.sciencedirect.com/science/article/pii/S0952197623009910"},{name:"code",url:"https://github.com/AlanLiangC/SPSNet"},{name:"project",url:"https://github.com/AlanLiangC/SPSNet"}]},
    { id:1, image:"public/images/publications/drfssd.png", author:"Alan Liang, Haiyang Hua, Jian Fang, Huaici Zhao, Tianci Liu", title:"Boosting 3D point-based object detection by reducing information loss caused by discontinuous receptive fields", conference:"International Journal of Applied Earth Observation and Geoinformation", details:" (CAS 1st TOP Quartile, IF: 7.6)", links:[{name:"pdf",url:"https://www.sciencedirect.com/science/article/pii/S1569843224004035"},{name:"code",url:"https://github.com/AlanLiangC/DRF-SSD.git"},{name:"project",url:"https://github.com/AlanLiangC/DRF-SSD.git"}]}
    ];
  