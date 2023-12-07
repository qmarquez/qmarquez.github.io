import React from "react";
import argentinaFlag from "./assets/argentina.svg";
import usaFlag from "./assets/usa.svg";
import { translation } from "./i18n/i18n_translations.enum";

const lastUpdate = "10/2023";

const availablesLanguages = [
  {
    img: argentinaFlag,
    imgAlt: "argentina flag",
    text: "v.Español",
    locale: "es",
  },
  {
    img: usaFlag,
    imgAlt: "usa flag",
    text: "v.English",
    locale: "en",
  },
];

const contactChannels = {
  printable: [
    {
      title: translation.leftBar.CONTACT_CELLPHONE,
      data: "+5411 3111-8072",
    },
    {
      title: translation.leftBar.CONTACT_EMAIL,
      data: (
        <React.Fragment>
          quimey.
          <wbr />
          marquez@
          <wbr />
          gmail.
          <wbr />
          com
        </React.Fragment>
      ),
    },
  ],
  notPrintable: [
    {
      href: "https://www.linkedin.com/in/quimarquez/",
      prefix: "fab",
      image: "linkedin",
    },
    { href: "mailto:quimey.marquez@gmail.com", image: "envelope-square" },
    { href: "https://github.com/qmarquez", prefix: "fab", image: "github" },
    { href: "https://t.me/qmarquez", prefix: "fab", image: "telegram" },
  ],
};

const careerGoals = [
  {
    es: "Ser parte de equipos proactivos donde prime el trabajo colaborativo y la comunicación. Que me permitan aportar y aprender de los demás. Donde lo projectos desarrollados desafíen mis habilidades y me permitan crecer profesionalmente.",
    en: "I aim to be part of proactive teams that prioritize collaborative work and effective communication. I seek opportunities where I can contribute, learn from others, and work on projects that challenge my skills, fostering my professional growth.",
  },
];

const whoIAmItems = [
  { en: "Brave", es: "Valiente" },
  { en: "Free", es: "Libre" },
  { en: "Partner", es: "Compañero" },
];

const basicData = [
  {
    title: { es: "Fecha de nacimiento", en: "Birth date" },
    data: { es: "11/03/1994", en: "11/03/1994" },
  },
  {
    title: { es: "CUIL", en: "CUIL" },
    data: { es: "20-35991142-5", en: "20-35991142-5" },
  },
  {
    title: { es: "Residencia", en: "Residence" },
    data: {
      es: "Santos Lugares, Bs.As. Argentina",
      en: "Santos Lugares, Bs.As. Argentina",
    },
  },
  {
    title: { es: "Intereses y hobbies", en: "Hobbies and interests" },
    items: {
      icon: "heartbeat",
      data: [
        { es: "Arquería, ciclismo y karate", en: "Archery, cycling, karate" },
        { es: "Fotografía y viajes", en: "Photography and travel" },
        {
          es: "Desarrollo personal y liderazgo",
          en: "Self-knowledge and leadership",
        },
      ],
    },
  },
];

const descriptions = [
  {
    es: "Senior BackEnd TypeScript & NodeJs Engineer especializado en el desarrollo de APIs REST basadas en NodeJS con TypeScript y bases de datos no relacionales. Con 10 años de trayectoria en grandes empresas del sector privado en industrias como la farmacéutica, la investigación social y la tecnología financiera. Lugares donde he podido desarrollar mis habilidades técnicas, buenas prácticas de desarrollo, comunicación y trabajo en equipo; así también pensamiento conceptual, agilidad de aprendizaje y liderazgo.",
    en: "Senior BackEnd TypeScript & Node.js Engineer specialized in the development of REST APIs with a focus on NodeJS and TypeScript, coupled with expertise in non-relational databases. With a decade of experience, I have a proven track record in development roles within major private sector companies across industries such as pharmaceuticals, social research, and financial technology. Throughout my career, I've cultivated technical skills like development best practices, effective communication, and teamwork. I also bring a strong conceptual mindset, quick learning agility, and leadership capabilities to the table.",
  },
];

const degreeStudies = [
  {
    es: { title: "Ingeniería en Sistemas. UTN.", timelapse: "2012-actualidad" },
    en: { title: "Systems engeneering. UTN.", timelapse: "2012-present" },
  },
];

const experiences = [
  {
    es: {
      timelapse: "11/2022-10/2023",
      title: "Ingeniero de software II. Clear.",
      link: {
        href: "https://www.clearme.com/",
        text: "Clear",
      },
      techStack: [
        "Backend: NodeJs, AWS (cloudwatch)",
        "Frontend: Angular 14, NextJs, tRCP",
        "Control de versiones: git, github, pull requests",
        "Metodología de trabajo: agiles (scrum, jira)",
      ],
      keyPoints: [
        "Comunicación hablada y escrita fluida en ingles (B2)",
        "Impulsé e impartí una charla sobre TDD",
        "Lideré nuevos projectos y requerimientos",
        "Fuí responsable de la implementación de API externa (Airsphere)",
        "Optimicé un endpoint existente, reduciendo el tiempo de respuesta de 2 minutos a 30s",
        "Impulsé la creación de documentacióñ de procesos de deploys",
      ],
    },
    en: {
      timelapse: "11/2022-10/2023",
      title: "Software Engineering II. Clear",
      link: {
        href: "https://www.clearme.com/",
        text: "Clear",
      },
      techStack: [
        "Backend: NodeJs, AWS (cloudwatch)",
        "Frontend: Angular 14, NextJs, tRCP",
        "Version Control: git, github, pull requests",
        "Work Methodology: Agile (scrum, jira)",
      ],
      keyPoints: [
        "Fluent spoken and written communication in English (B2)",
        "Initiated and conducted a talk on TDD",
        "Led new projects and requirements",
        "Responsible for implementing an external API (Airsphere)",
        "Optimized an existing endpoint, reducing response time from 2 minutes to 30 seconds",
        "Drove the creation of deployment process documentation",
      ],
    },
  },
  {
    es: {
      timelapse: "10/2020-10/2022",
      title: "Desarrollador JavaScript. Vates S.A.",
      link: {
        href: "https://www.vates.com/",
        text: "Vates S.A.",
      },
      techStack: [
        "Backend: NodeJs, AWS (Dynamo, S3, Lambdas, cloudwatch), firebase, firestore",
        "Control de versiones: gitlab, git, merge request",
        "Metodología de trabajo: agile (scrum, jira)",
        "Plantillas de projectos",
      ],
      keyPoints: [
        "[Nx] Fuí responsable de comenzar un projecto para otro equipo",
        "[Nx] Fuí responsable de la creación de lambdas para extender la funcionalidad de projectos existentes",
        "[TOCA] Fuí responsable del backend de un projecto para un cliente de Estados Unidos",
      ],
    },
    en: {
      timelapse: "10/2020-10/2022",
      title: "JavaScript Developer. Vates S.A.",
      link: {
        href: "https://www.vates.com/",
        text: "Vates S.A.",
      },
      techStack: [
        "Backend: NodeJs, AWS (Dynamo, S3, Lambdas, cloudwatch), firebase, firestore",
        "Version Control: gitlab, git, merge request",
        "Work Methodology: agile (scrum, jira)",
        "Project Templates",
      ],
      keyPoints: [
        "[Nx] I was responsible for initiating a project for another team",
        "[Nx] I was responsible for creating Lambdas to extend the functionality of existing projects",
        "[TOCA] I was responsible for the backend of a project for a client from the United States",
      ],
    },
  },
  {
    es: {
      timelapse: "04/2019-10/2020",
      title: "Desarrollador MERN Full stack. Opinaia Social Research.",
      link: {
        href: "https://www.opinaia.com/",
        text: "Opinaia",
      },
      techStack: [
        "Backend: NodeJs, AWS (Dynamo, S3, Lambdas, cloudwatch), firebase, firestore",
        "Frontend: ReactJs",
        "Docker",
        "Metodología de trabajo: kanban (jira, trello)",
      ],
      keyPoints: [
        "Responsable de la dockerización de projectos",
        "Mantube projectos existentes respetando compatibilidad con navegadores viejos (IE11)",
      ],
    },
    en: {
      timelapse: "04/2019-10/2020",
      title: "Full stack MERN developer. Opinaia Social Research.",
      link: {
        href: "https://www.opinaia.com/en",
        text: "Opinaia",
      },
      techStack: [
        "Backend: NodeJs, AWS (Dynamo, S3, Lambdas, cloudwatch), firebase, firestore",
        "Frontend: ReactJs",
        "Docker",
        "Work Methodology: kanban (jira, trello)",
      ],
      keyPoints: [
        "Responsible for Dockerizing projects",
        "Maintained existing projects while ensuring compatibility with older browsers (IE11)",
      ],
    },
  },
  // {
  //   es: {
  //     timelapse: '04/2018-10/2021',
  //     title: 'Desarrollador MEAN Full stack. Autónomo.',
  //     link: {
  //       href: 'http://asistentemr.herokuapp.com/',
  //       text: 'Asistente empresarial'
  //     },
  //     skills: [
  //       'Análisis y desarrollo de soluciones para asistir en procesos de contacto de prospectos y venta de productos',
  //       'Organización, detalle y priorización de tareas en Jira',
  //       'Investigación e implementación de buenas prácticas de desarrollo',
  //     ]
  //   },
  //   en: {
  //     timelapse: '04/2018-10/2021',
  //     title: 'Full stack MEAN developer. Freelance.',
  //     link: {
  //       href: 'http://asistentemr.herokuapp.com/',
  //       text: 'Asistente empresarial'
  //     },
  //     skills: [
  //       'Analysis and development of solutions to assist in processes of contact prospects and product sales',
  //       'Organization, detail and prioritization of Jira tasks',
  //       'Good development practices research and implementation',
  //     ]
  //   }
  // },
  // {
  //   es: {
  //     timelapse: '2013-2016',
  //     title: 'Programador. Droguería saporiti.',
  //     skills: [
  //       'Guía, acompañamiento y enseñanza a nuevos compañeros al equipo de trabajo sobre los sistemas y tecnologías existentes en la empresa',
  //       'Análisis y relevación de requerimientos para nuevos sistemas dentro de la empresa',
  //       'Mantenimiento, creación y ampliación del alcance de programas de escritorio internos',
  //       'Mantenimiento y migración a nuevas tecnologías de sistemas viejos',
  //     ]
  //   },
  //   en: {
  //     timelapse: '2013-2016',
  //     title: 'Developer. Droguería saporiti.',
  //     skills: [
  //       'New work team-mates guide, support and teaching over systems and technologies existing in company',
  //       'Analysis the requirements for new enterprise develops',
  //       'Internal desktop programs maintenance, creation and scope upgrade',
  //       'Old systems maintenance and migration to new technologies',
  //     ]
  //   }
  // }
];

const courses = [
  {
    es: {
      time: "2020",
      title: "Learn react in a fun way. Create sudoku with React",
      href: "https://www.udemy.com/course/learn-react-in-a-fun-way-create-sudoku-with-react/",
      extra: ". Udemy.",
    },
    en: {
      time: "2020",
      title: "Learn react in a fun way. Create sudoku with React",
      href: "https://www.udemy.com/course/learn-react-in-a-fun-way-create-sudoku-with-react/",
      extra: ". Udemy.",
    },
  },
  {
    es: {
      time: "2020",
      title: "Nest.js Series",
      href: "https://www.youtube.com/playlist?list=PLzHaXzj_WAyk9NF0OIa1gRYqAntHF0fMF",
      extra: ". Youtube.",
    },
    en: {
      time: "2020",
      title: "Nest.js Series",
      href: "https://www.youtube.com/playlist?list=PLzHaXzj_WAyk9NF0OIa1gRYqAntHF0fMF",
      extra: ". Youtube.",
    },
  },
  {
    es: {
      time: "2020",
      title: "La biblia de Node.js",
      href: "https://www.udemy.com/course/la-biblia-de-nodejs",
      extra: ". Udemy.",
    },
    en: {
      time: "2020",
      title: "Node.js bible",
      href: "https://www.udemy.com/course/la-biblia-de-nodejs",
      extra: ". Udemy.",
    },
  },
  {
    es: {
      time: "2019",
      title:
        "Entrenamiento de liderazco personal y coaching ontológico. Consultora CIELO.",
    },
    en: {
      time: "2019",
      title:
        "Ontological coaching and personal leadership training. CIELO consultant.",
    },
  },
  {
    es: {
      time: "2019",
      title: "Docker and Kubernetes: The Complete Guide",
      href: "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide",
      extra: ". Udemy.",
    },
    en: {
      time: "2019",
      title: "Docker and Kubernetes: The Complete Guide",
      href: "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide",
      extra: ". Udemy.",
    },
  },
  {
    es: {
      time: "2019",
      title: "Modern React with Redux",
      href: "https://www.udemy.com/course/react-redux",
      extra: ". Udemy.",
    },
    en: {
      time: "2019",
      title: "Modern React with Redux",
      href: "https://www.udemy.com/course/react-redux",
      extra: ". Udemy.",
    },
  },
  {
    es: { time: "2018", title: "Curso stack MEAN de desarrollo web. Platzi." },
    en: { time: "2018", title: "MEAN stack web development. Platzi." },
  },
  {
    es: {
      time: "2016",
      title: "Responsive web design & Bootstrap. Educación IT.",
    },
    en: {
      time: "2016",
      title: "Responsive web design & Bootstrap. Educación IT.",
    },
  },
  {
    es: {
      time: "2012",
      title:
        "Armado y Mantenimiento de Redes, IAC, Filial Devoto, Prof. Alejandro Nacir.",
    },
    en: {
      time: "2012",
      title:
        "Network setup and maintenance, IAC, Subsidiary Devoto, Tchr. Alejandro Nacir.",
    },
  },
  {
    es: {
      time: "2011",
      title:
        "Armado y Reparación de PC’s, IAC, Filial San Martin Prof. Alejandro Nacir.",
    },
    en: {
      time: "2011",
      title:
        "PC setup and repair, IAC, Subsidiary San Martin, Tchr. Alejandro Nacir.",
    },
  },
];

const skills = [
  // GIT
  {
    es: {
      title: "Git",
      details: [
        { icon: "bolt", text: "Conventional commits." },
        { icon: "bolt", text: "Git hooks para testing & lintern." },
        { icon: "cogs", text: "Git kraken." },
        { icon: "cogs", text: "Github, gitlab." },
        { icon: "code", text: "Revisión de merge requests." },
        { icon: "code", text: "Reflog, stash, cherry-pick, squash." },
      ],
    },
    en: {
      title: "Git",
      details: [
        { icon: "bolt", text: "Conventional commits." },
        { icon: "bolt", text: "Git hooks for testing & lintern." },
        { icon: "cogs", text: "Git kraken." },
        { icon: "cogs", text: "Github, gitlab." },
        { icon: "code", text: "Merge requests review." },
        { icon: "code", text: "Reflog, stash, cherry-pick, squash." },
      ],
    },
  },
  // Mongo
  {
    es: {
      title: "MongoDB",
      details: [
        { icon: "cogs", text: "Agreggation Framework, indexes." },
        { icon: "cogs", text: "mongo shell." },
      ],
    },
    en: {
      title: "MongoDB",
      details: [
        { icon: "cogs", text: "Agreggation Framework, indexes." },
        { icon: "cogs", text: "mongo shell." },
      ],
    },
  },
  // ANGULAR
  {
    es: {
      title: "Angular",
      details: [
        { icon: "bolt", text: "Test sobre componentes y servicios, TestBed" },
        { icon: "code", text: "SPA, service worker, PWA." },
        { icon: "code", text: "HttpClient, Lifecicle hooks, Interceptors." },
        { icon: "cogs", text: "Angular CLI, Angular material UI." },
      ],
    },

    en: {
      title: "Angular",
      details: [
        { icon: "bolt", text: "Component & service testing, TestBed" },
        { icon: "code", text: "SPA, service worker, PWA." },
        { icon: "code", text: "HttpClient, Lifecicle hooks, Interceptors." },
        { icon: "cogs", text: "Angular CLI, Angular material UI." },
      ],
    },
  },
  // Docker
  {
    es: {
      title: "Docker & Docker compose",
      details: [
        { icon: "code", text: "Dockerfile, docker-compose.yml." },
        { icon: "cogs", text: "Docker HUB." },
        { icon: "cogs", text: "Docker CLI, docker-compose." },
        { icon: "cogs", text: "Dockerizacion de proyectos existentes." },
      ],
    },
    en: {
      title: "Docker & Docker compose",
      details: [
        { icon: "code", text: "Dockerfile, docker-compose.yml." },
        { icon: "cogs", text: "Docker HUB." },
        { icon: "cogs", text: "Docker CLI, docker-compose." },
        { icon: "cogs", text: "Existing projects dockerization." },
      ],
    },
  },
  // Nodejs
  {
    es: {
      title: "Node Js",
      details: [
        { icon: "cogs", text: "Aplicaciones de backend." },
        {
          icon: "code",
          text: "expressjs, mongoosejs, sequelize, oclif, moment.",
        },
        { icon: "code", text: "inversify, event loop" },
      ],
    },
    en: {
      title: "Node Js",
      details: [
        { icon: "cogs", text: "Backend apps." },
        {
          icon: "code",
          text: "expressjs, mongoosejs, sequelize, oclif, moment.",
        },
        { icon: "code", text: "inversify, event loop" },
      ],
    },
  },
  // SQL
  // {
  //   es: {
  //     title: 'SQL',
  //     details: [
  //       { icon: 'code', text: 'MySQL, T-SQL.' },
  //       { icon: 'cogs', text: 'Stored procedures, Joins.' },
  //       { icon: 'cogs', text: 'Consultas básicas.' }
  //     ]
  //   },
  //   en: {
  //     title: 'SQL',
  //     details: [
  //       { icon: 'code', text: 'MySQL, T-SQL.' },
  //       { icon: 'cogs', text: 'Stored procedures, Joins.' },
  //       { icon: 'cogs', text: 'Basics CRUDs.' }
  //     ]
  //   }
  // },
  // React
  {
    es: {
      title: "React",
      details: [
        { icon: "bolt", text: "NextJs" },
        {
          icon: "bolt",
          text: "Hooks: useState, useEffect, useMemo, useForm, entre otros.",
        },
        { icon: "code", text: "Context, creación y consumo" },
        { icon: "code", text: "Redux, thunk, global stage." },
        { icon: "code", text: "Componentes funcionales" },
        { icon: "cogs", text: "Web apps, consumo de APIs consume." },
      ],
    },
    en: {
      title: "React",
      details: [
        { icon: "bolt", text: "NextJs" },
        {
          icon: "bolt",
          text: "Hooks: useState, useEffect, useMemo, useForm, others.",
        },
        { icon: "code", text: "Context, use & creation" },
        { icon: "code", text: "Redux, thunk, global stage." },
        { icon: "code", text: "Functional components" },
        { icon: "cogs", text: "Web apps, APIs consume." },
      ],
    },
  },
  // General
  {
    es: {
      title: "Herramientas generales",
      details: [
        { icon: "cogs", text: "VSCode." },
        { icon: "cogs", text: "MacOS, Ubuntu, KDE Neon, Windows." },
        { icon: "cogs", text: "Bash, terminal, manejo de consola." },
        { icon: "cogs", text: "Ofimáticas (MS office, libre office, GDocs)." },
        { icon: "cogs", text: "Photoshop, GIMP." },
        { icon: "cogs", text: "Illustrator, Inkscape." },
        { icon: "cogs", text: "Robo3T." },
        { icon: "cogs", text: "Jira, trello, slack, gmail." },
      ],
    },
    en: {
      title: "General tools",
      details: [
        { icon: "cogs", text: "VSCode." },
        { icon: "cogs", text: "MacOS, Ubuntu, KDE Neon, Windows." },
        { icon: "cogs", text: "Bash, terminal, console handeling." },
        { icon: "cogs", text: "Ofimatics (MS office, open office, GDocs)." },
        { icon: "cogs", text: "Photoshop, GIMP." },
        { icon: "cogs", text: "Illustrator, Inkscape." },
        { icon: "cogs", text: "Robo3T." },
        { icon: "cogs", text: "Jira, trello, slack, gmail." },
      ],
    },
  },
];

const body = {
  descriptions,
  degreeStudies,
  experiences,
  courses,
  skills,
  lastUpdate,
};

const leftBar = {
  contactChannels,
  careerGoals,
  whoIAmItems,
  basicData,
};

export { availablesLanguages, leftBar, body };
