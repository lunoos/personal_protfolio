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
  subtitle: 'I am a web Developer.',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'I am, a web developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web development from past few months. I enjoy creating beautifully designed, intuitive and functional websites.',
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
    info: 'This is an simple E-commerse site with user friendly interface and is responsive. Built using React for the front end , Node.Js as backend, MongoDB as database and Razorpay as payment gateway.',
    //info2: '',
    url: 'https://neelamfrontend.herokuapp.com/',
    repo: 'https://github.com/lunoos/neelam', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Smart Brain App',
    info: 'A full-stack web application, this app allows you to identify the faces in any image supplied. This was achieved thanks to Clarifais artificial intelligence API.',
    info2: 'I used React, Node, Express.js and PostgreSql in order to create this web application.',
    url: 'https://beautydetect.herokuapp.com/',
    repo: 'https://github.com/lunoos/smartBrainBackEnd', // if no repo, the button will not show up
  },
//   {
//     id: nanoid(),
//     img: 'project3.jpg',
//     title: 'Blog',
//     info: ' A simple blog with markdown support.This full-stack application allows you to add, edit and delete blogs.',
//     info2: 'Built usign Node.Js for backend and  MongoDB for database.',
//     url: 'https://blogarticels.herokuapp.com/',
//     repo: 'https://github.com/lunoos/blogArticles', // if no repo, the button will not show up
//   },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Netflix clone',
    info: 'This is a netflix clone built by using react for front, used TMDB API to get the movie data, for playing the trailer made use of `youtube` and `movie-trailer` npm package finally used firebase to launch web app',
    //info2: '',
    url: 'https://lunoos.github.io/chartScreen',
    repo: 'https://github.com/lunoos/chartScreen', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Chat interface',
    info: 'This is a Chat interface built using React for front end and redux for state management.',
    //info2: '',
    url: 'https://streaming-11af7.web.app/',
    repo: '', // if no repo, the button will not show up
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
