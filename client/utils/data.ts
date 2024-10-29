import AboutMe from "@/app/components/AboutMe";
import Contact from "@/app/components/Contact";
import Hero from "@/app/components/Hero";
import Game from "@/app/components/game/Game";

import {
  faHome,
  faUser,
  faEnvelope,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

// export const pages = [
//   {
//     id: "preview",
//     title: "Welcome to my WebSite",
//     description: "",
//   },
//   {
//     id: "home",
//     title: "Diana Kosta",
//     subTitle:
//       " Full Stack | React | Javascript | Typescript | GraphQL | NextJS | Python | AWS | Docker | SQL",
//     description: `Software Engineer specializing in front-end development, passionate about building innovative web applications
//                   from scratch in fast-paced startup environments. Skilled in React.js, Next.js, Node.js, Python, and modern web technologies,
//                   with a proven track record of delivering high-quality software products.
//                  `,
//   },
//   {
//     id: "about",
//     title: "About me",
//     subTitle: "Full Stack / Frontend Developer",
//     description: `As a Software Engineer at a SaaS company, I design and develop web applications that enhance operational efficiency and business performance. With over 10 years of experience in web development, I hold a Bachelor’s degree in Computer Engineering with a specialization in Web Application Development. My technical expertise includes JavaScript frameworks and libraries (React, Redux, Node.js, Express, Next.js, Angular), TypeScript, Python, RESTful APIs, MongoDB, MySQL, Salesforce, Azure, containers, and Git. I work closely with project managers, designers, QA teams, and backend engineers to deliver scalable, responsive, and secure solutions. Beyond coding, I emphasize code quality, testing, documentation, and adherence to best practices. Passionate about solving real-world problems,
//                   I focus on creating innovative, user-friendly applications that improve lives and optimize workflows.`,
//   },
//   {
//     id: "contact",
//     title: "Keep in touch",
//     description:
//       "If you have any questions or wish to connect, please do not hesitate to reach out to me.",
//   },
//   {
//     id: "game",
//     title: "Lets play memory game...",
//     description: "",
//   },
// ];

export const menuItems = [
  { label: "Home", val: "home", icon: faHome, comp: Hero },
  { label: "About", val: "about", icon: faUser, comp: AboutMe },
  { label: "Contact", val: "contact", icon: faEnvelope, comp: Contact },
  { label: "Game", val: "game", icon: faGamepad, comp: Game },
];

export const socialItems = [
  {
    link: "https://www.linkedin.com/in/diana-kosta-6901411a/",
    icon: "linkedin-in",
    type: "fab",
  },
  { link: "https://github.com/dianakosta1985", icon: "github", type: "fab" },
  {
    link: "https://drive.usercontent.google.com/u/0/uc?id=1bCvI4fYsao_HtXGTHQOPkKW2fTOYMK4N&export=download",
    icon: "file",
    type: "fas",
  },
];

export const cards = [
  { id: 1, name: "next", image: "/assets/images/nextjs.svg" },
  { id: 2, name: "next", image: "/assets/images/nextjs.svg" },
  { id: 3, name: "angular", image: "/assets/images/angular.svg" },
  { id: 4, name: "angular", image: "/assets/images/angular.svg" },
  { id: 5, name: "python", image: "/assets/images/python.svg" },
  { id: 6, name: "python", image: "/assets/images/python.svg" },
  { id: 7, name: "node", image: "/assets/images/nodejs.svg" },
  { id: 8, name: "node", image: "/assets/images/nodejs.svg" },
  { id: 9, name: "ts", image: "/assets/images/ts.svg" },
  { id: 10, name: "ts", image: "/assets/images/ts.svg" },
  { id: 11, name: "react", image: "/assets/images/react.svg" },
  { id: 12, name: "react", image: "/assets/images/react.svg" },
];

export const cardsData = cards.map((card) => ({
  ...card,
  order: Math.floor(Math.random() * 12),
  isFlipped: false,
}));
