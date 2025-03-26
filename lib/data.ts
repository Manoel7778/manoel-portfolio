import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import uisaImage from '@/public/uisa.jpeg';
import { FaPython } from "react-icons/fa";
import { SiJavascript, SiNextdotjs } from "react-icons/si";

export interface Experience {
    title: string;
    location: string;
    description: string;
    icon: React.ReactNode;
    date: string;
}

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
] as const;


export const headerLanguageMap = {
    Home: 'Início',
    About: 'Sobre mim',
    Projects: 'Projetos',
    Skills: 'Habilidades',
    Experiences: 'Experiências',
};

export const experiencesData = [
    {
        title: "Desenvolvedor Júnior",
        location: "UISA | Nova Olímpia, Mato Grosso, Brasil",
        description:
            "Desenvolvimento de APIs e automações com RPA usando Python, VBA, JavaScript e AutomationEdge. Também atuo no desenvolvimento web utilizando frameworks como React e Next.js.",
        icon: React.createElement(SiNextdotjs),
        date: "Abr de 2024 - o momento",
    },
    {
        title: "Assistente de TI",
        location: "UISA | Nova Olímpia, Mato Grosso, Brasil",
        description:
            "Desenvolvedor de RPA especializado no software Automation Edge, com expertise em automação de processos utilizando Python e VBA. Contribuí para a eficiência operacional, implementando soluções inovadoras e integrando sistemas para otimizar fluxos de trabalho.",
        icon: React.createElement(SiNextdotjs),
        date: "Jan de 2023 - Abr de 2024",
    },
    {
        title: "Assistente de TI (Aprendiz)",
        location: "Brasil",
        description:
            "Jovem aprendiz com experiência em desenvolvimento no Fluig e automação de processos (RPA). Contribuí para projetos de otimização, adquirindo habilidades práticas em ambientes corporativos.",
        icon: React.createElement(SiJavascript),
        date: "Fev de 2022 - Jan de 2023",
    },
    {
        title: "Professor de Informática",
        location: "Dinâmika Cursos | Nova Olímpia, Brasil",
        description:
            "Auxiliei alunos em seus cursos, sanando dúvidas e fazendo correções. Também introduzi alunos leigos ao ambiente digital, ajudando-os a se tornarem operadores de computador.",
        icon: React.createElement(LuGraduationCap),
        date: "Jun de 2018 - Jan de 2020",
    },
];

export const experiencesDataEn = [
    {
        title: "Junior Developer",
        location: "UISA | Nova Olímpia, Mato Grosso, Brazil",
        description:
            "Development of APIs and automations with RPA using Python, VBA, JavaScript, and AutomationEdge. I also work on web development using frameworks such as React and Next.js.",
        icon: React.createElement(SiNextdotjs),
        date: "Apr 2024 - Present",
    },
    {
        title: "IT Assistant",
        location: "UISA | Nova Olímpia, Mato Grosso, Brazil",
        description:
            "RPA developer specialized in Automation Edge software, with expertise in process automation using Python and VBA. Contributed to operational efficiency by implementing innovative solutions and integrating systems to optimize workflows.",
        icon: React.createElement(SiNextdotjs),
        date: "Jan 2023 - Apr 2024",
    },
    {
        title: "IT Assistant (Apprentice)",
        location: "Brazil",
        description:
            "Apprentice with experience in Fluig development and process automation (RPA). Contributed to optimization projects, gaining practical skills in corporate environments.",
        icon: React.createElement(SiJavascript),
        date: "Feb 2022 - Jan 2023",
    },
    {
        title: "Computer Science Teacher",
        location: "Dinâmika Cursos | Nova Olímpia, Brazil",
        description:
            "Assisted students in their courses by answering questions and making corrections. Also introduced novice students to the digital environment, helping them become computer operators.",
        icon: React.createElement(LuGraduationCap),
        date: "Jun 2018 - Jan 2020",
    },
];



export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        "title": "Website UISA",
        "title_en": "Website UISA",
     "description": "O desenvolvimento do website da UISA criou uma plataforma intuitiva e responsiva, com design moderno e funcional, garantindo acesso fácil e eficiente às informações.",
"description_en": "The UISA website development created an intuitive and responsive platform with a modern, functional design, ensuring easy and efficient access to information."
,
        "tags": ["React", "Next.js", "TypeScript", "TailwindCSS"],
        "imageUrl": uisaImage,
        "projectUrl": "",
        "demoUrl": "https://www.uisa.com.br/"
    }
]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Vue2",
    "Vue3",
    "Node",
    "Python",
    "Express",
    "Git",
    "Github",
    "Tailwind",
    "Boostrap",
    "MongoDB",
    "Framer Motion",
    "AutomationEdge",
    "SQL",
    "Fluig"
] 
