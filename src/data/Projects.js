import { SiRedux, SiAmazonaws, SiReact, SiDjango, SiFlask, SiFastapi, SiDocker, SiKubernetes, SiLinux, SiCplusplus, SiPostgresql, SiMysql, SiMongodb, SiTailwindcss } from "react-icons/si";
import dentistore from "../assets/dentistore.png"
import colegio from "../assets/colegio.png"
import portfolio from "../assets/portfolio.png"
import mercaorinoquia from "../assets/Mercaorinoquia.png"
import AQ from "../assets/A&Q.png"

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
      image: dentistore,
      frontend: "https://github.com/DanielAlferez/fronted-dentistore",
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
        backend: "https://github.com/DanielAlferez/Api-Buses-Unillanos",
      },
      {
        id:3,
        title: "Portfolio",
        technologies: [
          { name: "ReactJS", icon: SiReact},
          { name: "Redux - Redux Toolkit", icon: SiRedux},
          { name: "Tailwindcss", icon: SiTailwindcss},
        ],
        image: portfolio,
        frontend: "https://github.com/DanielAlferez/Portfolio",
        demo: "https://danielalferez.netlify.app" 
      },
      {
        id:4,
        title: "MariaMontessori",
        technologies: [
          { name: "ReactJS", icon: SiReact},
          { name: "Redux - Redux Toolkit", icon: SiRedux},
          { name: "Tailwindcss", icon: SiTailwindcss},
          { name: "Django", icon: SiDjango},
          { name: "Postgresql", icon: SiPostgresql},
          { name: "Docker", icon: SiDocker},
          { name: "Linux", icon: SiLinux},
        ],
        image: colegio,
        frontend: "https://github.com/DanielAlferez/Frontend-MariaMontessori",
        backend: "https://github.com/DanielAlferez/Backend_Maria_Montessori",
        demo: "https://maria-montessori.netlify.app" 
      },
      {
        id:5,
        title: "Mercaorinoquia",
        technologies: [
          { name: "ReactJS", icon: SiReact},
          { name: "Redux - Redux Toolkit", icon: SiRedux},
          { name: "Tailwindcss", icon: SiTailwindcss},
          { name: "Django", icon: SiDjango},
          { name: "Postgresql", icon: SiPostgresql},
          { name: "Linux", icon: SiLinux},
        ],
        image: mercaorinoquia,
        demo: "https://mercaorinoquia.netlify.app" 
      },
      {
        id:6,
        title: "A&Q",
        technologies: [
          { name: "ReactJS", icon: SiReact},
          { name: "Redux - Redux Toolkit", icon: SiRedux},
          { name: "Tailwindcss", icon: SiTailwindcss},
          { name: "Django", icon: SiDjango},
          { name: "Postgresql", icon: SiPostgresql},
          { name: "Linux", icon: SiLinux},
        ],
        image: AQ,
        demo: "https://ayqingenieria.netlify.app" 
      },
]