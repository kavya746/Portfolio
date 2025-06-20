// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';

//import { SiAmazonaws } from "react-icons/si";


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo:javaLogo},
      { name: 'Python', logo:pythonLogo},
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      company: "",
      role:"AWS AI-ML Virtual Internship",
      date: "Jan 2024 - March 2024",
      desc: "Participated in the AWS AI-ML Virtual Internship by EduSkills & AICTE, gaining exposure to the foundational concepts and workflows used in AI and ML environments.",
      skills: [
        "- Explored about AI&ML",
        "- Enhanced my knowledge",
      ],
    },
    {
      id: 1,
      role: "Google Android Developer Virtual Internship",
      company: "",
      date: "April 2024 - June 2024",
      desc: "Completed the Google Android Developer Virtual Internship, gaining exposure to basic concepts of Android development and understanding the fundamentals of Kotlin programming.",
      skills: [
        "- Understood fundamentals of kotlin",
        "- Gained knowledge about android development",
      ],
    },
    {
      id: 2,
      role: "AI intern",
      company: "Infosys Springboard",
      date: "October 2024 - December 2024",
      desc: "Worked as an AI Project Intern, developing an interactive AI Story Teller application using Python, NLP, Streamlit, and deep learning. Focused on generating meaningful stories from image inputs by integrating image captioning with language models, and collaborated on model fine-tuning and UI deployment.",
      skills: [
        "- Python(Basic level)",
        "- Developed AI Story Teller",
        "- Streamlit",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      school: "Prasad V Potluri Siddhartha Institute of Technology, Vijayawada",
      date: "2022 - 2026",
      grade: "9.19 CGPA",
      desc: "I am currently pursuing a Bachelor of Technology (B.Tech) in Information Technology at PVP Siddhartha Institute of Technology, Vijayawada. Throughout my studies, I have been immersed in a variety of subjects that have deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I have gained practical insights into the world of software development.",
      degree: "Bachelor of Technology - B.Tech",
    },
    {
      id: 1,
      school: "Sri Chaitanya junior College, Vijayawada",
      date: "2020 - 2022",
      grade: "96.8%",
      desc: "I completed my Intermediate education at Sri Chaitanya Junior College under the AP SSC Board. I pursued the MPC stream, with core subjects including Mathematics, Physics, and Chemistry.",
      degree: "Intermediate (MPC)",
    },
    {
      id: 2,
      school: "Swarna Bharathi School, Vijayawada",
      date: "2019 - 2020",
      grade: "9.68 CGPA",
      desc: "I completed my class 10 education from Swarna Bharathi School, Vijayawada",
      degree: "Class 10",
    },
  ];
  
  export const projects = [
     {
      id: 0,
      title: "Interactive AI Story teller",
      description:
        "An innovative AI-based storytelling system that transforms image inputs into coherent and creative stories. By using state-of-the-art deep learning models such as BLIP for image captioning and Google's Gemini API for story generation, the tool generates meaningful narratives from one or more user-provided images. Firebase Authentication is implemented for secure user login and data management. Designed with an intuitive interface using Streamlit, the application offers features like caption generation, story synthesis, and the ability to regenerate different story versions based on the same images. Ideal for educational tools, creative content generation, and interactive learning, the project showcases skills in computer vision, natural language processing, cloud integration, end-to-end application development and full-stack development.",
      //image: githubdetLogo,
       tags: ["Streamlit", "Firebase", "Python", "AI"],
       github: "https://github.com/kavya746/story-teller",
       webapp: "https://storyteller-using-ai.streamlit.app/",
    },
    {
      id: 1,
      title: "Employee Track",
      description:
        "A comprehensive employee management system using MongoDB, Express.js, React.js and Node.js. The application includes a secure login system, an admin dashboard, and features for adding employees, managing salaries, and tracking leaves.The system allows seamless tracking and management of employee data through an intuitive interface.",
      //image: githubdetLogo,
       tags: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/kavya746/Employeetrack-frontend", 
      webapp: "https://employeetrack-frontend-ten.vercel.app/login",
    },
    {
      id: 2,
      title: "Stock Movement Prediction Analysis, ML Project",
      description:
        "An intelligent and data-driven machine learning model developed to predict stock price movements with high precision. By analyzing key features such as historical stock data, trading volume, market sentiment, technical indicators, and economic trends, the model uncovers patterns that influence stock performance. Ideal for investors, analysts, and financial institutions, this tool empowers users to make informed decisions, reduce investment risks, and optimize trading strategies using predictive analytics and real-time insights.",
      //image: githubdetLogo,
       tags: ["ML"],
      github: "https://github.com/kavya746/stock-prediction",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },

  ];  