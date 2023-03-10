import { SiRedux, SiAmazonaws, SiReact, SiDjango, SiFlask, SiFastapi, SiDocker, SiKubernetes, SiLinux, SiCplusplus, SiPostgresql, SiMysql, SiMongodb, SiTailwindcss } from "react-icons/si";

export default [
    {
      id:1,
      title: "DentiStore",
      technologies: [
        { name: "ReactJS", icon: SiReact},
        { name: "Tailwindcss", icon: SiTailwindcss},
        { name: "Django", icon: SiDjango},
        { name: "MySql", icon: SiMysql},
        { name: "Docker", icon: SiDocker},
        { name: "Linux", icon: SiLinux},
      ],
      image: "https://alvarotrigo.com/blog/assets/imgs/2021-12-21/css-grid-layout-project-for-student.jpeg",
      github: "https://github.com/DanielAlferez/fronted-dentistore",
      demo: "https://dentistore.netlify.app"
    },
    {
        id:2,
        title: "UniRutas - API",
        technologies: [
          { name: "Flask", icon: SiFlask},
          { name: "Postgresql", icon: SiPostgresql},
          { name: "Docker", icon: SiDocker},
          { name: "Kubernetes", icon: SiKubernetes},
          { name: "Linux", icon: SiLinux},
        ],
        image: "https://www.pngitem.com/pimgs/m/419-4199927_web-showcase-project-presentation-101-receitas-de-papinhas.png",
        github: "https://github.com/DanielAlferez/Api-Buses-Unillanos",
      },
      {
        id:3,
        title: "Portfolio",
        technologies: [
          { name: "ReactJS", icon: SiReact},
          { name: "Redux", icon: SiRedux},
          { name: "Tailwindcss", icon: SiTailwindcss},
        ],
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/17d840115319459.Y3JvcCwxMzgyLDEwODEsNTgsMA.jpg",
        github: "https://github.com/DanielAlferez/Portfolio",
        demo: "https://danielalferez.netlify.app" 
      },
      {
        id:4,
        title: "MariaMontessori",
        technologies: [
          { name: "ReactJS", icon: SiReact},
          { name: "Redux", icon: SiRedux},
          { name: "Tailwindcss", icon: SiTailwindcss},
        ],
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/7c808f158467145.Y3JvcCwyODc2LDIyNTAsNjQsMA.jpg",
        github: "https://github.com/DanielAlferez/Frontend-MariaMontessori",
        demo: "https://maria-montessori.netlify.app" 
      },
      {
        id:5,
        title: "MariaMontessori - Api",
        technologies: [
          { name: "Django", icon: SiDjango},
          { name: "Postgresql", icon: SiPostgresql},
          { name: "Docker", icon: SiDocker},
          { name: "Linux", icon: SiLinux},
        ],
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/7c808f158467145.Y3JvcCwyODc2LDIyNTAsNjQsMA.jpg",
        github: "https://github.com/DanielAlferez/Backend_Maria_Montessori",
      },
]