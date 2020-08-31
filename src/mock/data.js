import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Mahendar patel', // e.g: 'Name | Developer'
  lang: 'eg', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Mahendar Patel',
  subtitle: 'I am a Full Stack Developer.',
  cta: 'Hire me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'I am, a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development from past one year. I enjoy creating beautifully designed, intuitive and functional websites.',
  paragraphTwo: 'Below are some of my recent live projects feel free to go through them. "Lets build something special".',
  paragraphThree: '. . .',
  resume: 'https://drive.google.com/file/d/1hpO8WKg-2_1Bgh9AkgFy5H1mC3rgBgsR/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'E-commerse site',
    info: 'This is an simple E-commerse site with user friendly interface and is responsive. Built using React for the front end , Node.Js as backend and used MongoDB as database.',
    //info2: '',
    url: 'https://neelamfrontend.herokuapp.com/',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Smart Brain App',
    info: 'This is an Image Recognition App that uses a Api provided by the Clarifai. Bulit using react for fornt end , NodeJs for backend and used Postgresql for data base.',
    //info2: '',
    url: 'https://beautydetect.herokuapp.com/',
    repo: 'https://github.com/lunoos/smartBrainBackEnd', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'MarkDown Blog',
    info: 'This is a Plain text formatting syntax. Built usign Node.Js for backend and  MongoDB for database.',
    //info2: '',
    url: 'https://blogarticels.herokuapp.com/',
    repo: 'https://github.com/lunoos/blogArticles', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Chat interface',
    info: 'This is simple Chart interface built using React for front end and used redux for state management.',
    //info2: '',
    url: 'https://lunoos.github.io/chartScreen',
    repo: 'https://github.com/lunoos/chartScreen', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Have a question or want to work together?',
  btn: 'Message',
  email: 'pmahendar2373@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Mahenda93755154',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mahendarpatel5ab98b161/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lunoos',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
