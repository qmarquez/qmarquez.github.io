import React from 'react';
import argentinaFlag from './assets/argentina.svg';
import usaFlag from './assets/usa.svg';
import { translation } from './i18n/i18n_translations.enum';

const lastUpdate = '10/2023';

const availablesLanguages = [
  {
    img: argentinaFlag,
    imgAlt: 'argentina flag',
    text: 'v.Español',
    locale: 'es'
  }, {
    img: usaFlag,
    imgAlt: 'usa flag',
    text: 'v.English',
    locale: 'en'
  }
];

const contactChannels = {
  printable: [
    {
      title: translation.leftBar.CONTACT_CELLPHONE,
      data: '+5411 3111-8072'
    },
    {
      title: translation.leftBar.CONTACT_EMAIL,
      data: <React.Fragment>quimey.<wbr />marquez@<wbr />gmail.<wbr />com</React.Fragment>,
    }
  ],
  notPrintable: [
    { href: 'https://www.linkedin.com/in/quimarquez/', prefix: 'fab', image: 'linkedin' },
    { href: 'mailto:quimey.marquez@gmail.com', image: 'envelope-square' },
    { href: 'https://github.com/qmarquez', prefix: 'fab', image: 'github' },
    { href: 'https://t.me/qmarquez', prefix: 'fab', image: 'telegram' }
  ]
}

const careerGoals = [
  {
    es: 'Integrar equipos de trabajo proactivos, con conocimientos y experiencia, de los cuales pueda nutrirme y aportar mis conocimientos',
    en: 'Be part of proactive, experienced and wise teams, where I can learn and teach',
  },
  {
    es: 'Aportar a projectos que tengan impacto positivo en la sociedad, que desde la programación se solucionen problemas y necesidades',
    en: 'Contribute to impact projects, looking to improve the society, solve problems and necessities',
  },
  {
    es: 'Poder administrar mis tiempos de trabajo',
    en: 'Being able to manage my workin hours',
  },
];

const whoIAmItems = [
  { en: 'Brave', es: 'Valiente' },
  { en: 'Free', es: 'Libre' },
  { en: 'Partner', es: 'Compañero' },
  { en: 'Fast learning', es: 'Rápido aprendizaje' },
];

const basicData = [
  {
    title: { es: 'Fecha de nacimiento', en: 'Birth date' },
    data: { es: '11/03/1994', en: '11/03/1994' }
  },
  {
    title: { es: 'CUIL', en: 'CUIL' },
    data: { es: '20-35991142-5', en: '20-35991142-5' }
  },
  {
    title: { es: 'Residencia', en: 'Residence' },
    data: { es: 'Santos Lugares, Bs.As. Argentina', en: 'Santos Lugares, Bs.As. Argentina' }
  },
  {
    title: { es: 'Intereses y hobbies', en: 'Hobbies and interests' },
    items: {
      icon: 'heartbeat',
      data: [
        { es: 'Arquería, ciclismo y karate', en: 'Archery, cycling, karate' },
        { es: 'Fotografía y viajes', en: 'Photography and travel' },
        { es: 'Desarrollo personal y liderazgo', en: 'Self-knowledge and leadership' },
      ]
    }
  }
];

const descriptions = [
  {
    es: 'Mi principal interés es integrar equipos de trabajo proactivos, con buena energía y disposición al ganar-ganar que me permita expandir y poner al servicio mis habilidades creativas y de desarrollo. Donde escuchar, ser escuchado y tenido en cuenta sean valores por defecto. Con una compensación justa y el suficiente manejo de mis tiempos para continuar mis proyectos independientes.',
    en: 'My main interest is to integrate proactive teams, with good energy and a win-win state of mind that allows me to expand and share my creativity and development skills. I am looking for a workplace where to be listened, to be heard and to be taken into account are default values. Looking for a fair compensation and sufficient management of my time to continue my independent projects.'
  },
  {
    es: 'Me desempeño como desarrollador desde el año 2013, en mis comiezos realicé taréas con tecnologías Microsoft (Desktop C#, SQL Server). Hoy en día mi interés y foco está puesto en especializarme con tecnologías web, JavaScript en todos sus sabores principamente. Mas allá de eso estoy abierto y dispuesto al aprendizaje de otras tecnologías (Python, Go, Deno) y paradigmas (funcional, lógico, objetos).',
    en: 'From 2013 I have worked as a developer. My beginning with developing started mainly using Microsoft techs like Desktop C# and SQL Server. Nowadays, i\'m focusing over web technologies like JavaScript and all it\'s branches (frontend, backend, over frameworks, vanilla JS). Additionally, I keep my mind open to learn other new technologies, such as Python, Go, Deno, and paradigms like functional, logic, object.'
  }
];

const degreeStudies = [
  {
    es: { title: 'Ingeniería en Sistemas. UTN.', timelapse: '2012-actualidad' },
    en: { title: 'Systems engeneering. UTN.', timelapse: '2012-present' }
  }
];

const experiences = [
  {
    es:{
      timelapse: '11/2022-10/2023',
      title: 'Ingeniero de software II. Clear.',
      link: {
        href: 'https://www.clearme.com/',
        text: 'Clear'
      },
      skills: [
        'Desarrollo BackEnd NodeJS',
        'Liderazgo sobre nuevos projectos y requerimientos',
        'Transferencia de conocimiento - Testing, TDD, React',
        'Comunicación hablada y escrita fluida en ingles (C2)',
        'Implementación de APIs externas (Airsphere)',
      ]
    },
    en: {
      timelapse: '11/2022-10/2023',
      title: 'Software Engineering II. Clear',
      link: {
        href: 'https://www.clearme.com/',
        text: 'Clear'
      },
      skills: [
        'BackEnd (NodeJS) development',
        'Leadership on new projects and requirements',
        'Knowledge transfer - Testing, TDD, React',
        'Fluent spoken and written communication in English (C2)',
        'Implementation of external APIs (Airsphere)',
      ]}
  },
  {
    es: {
      timelapse: '10/2020-10/2022',
      title: 'Desarrollador JavaScript. Vates S.A.',
      link: {
        href: 'https://www.vates.com/',
        text: 'Vates S.A.'
      },
      skills: [
        'Desarrollo BackEnd (NodeJS) para NaranjaX',
        'Mantenimiento y desarrollo de microservicios basados en AWS',
        'Uso de herramientas de AWS (Dynamo, S3, Lambda)',
        '[desde 10/2021] Desarrollo FullStack (React+NodeJS) para cliente de Estados Unidos',
        'Comunicación escrita y hablada en ingles',
        'Desarrollo de APIs con firebase functions',
        'Almacenamiento y gestion de datos con Firestore',
      ]
    },
    en: {
      timelapse: '10/2020-10/2022',
      title: 'JavaScript Developer. Vates S.A.',
      link: {
        href: 'https://www.vates.com/',
        text: 'Vates S.A.'
      },
      skills: [
        'BackEnd (NodeJS) development for NaranjaX',
        'Microservices maintenance and develop, AWS based',
        'AWS tool use (Dynamo, S3, Lambda)',
        '[since 10/2021] FullStack (React+NodeJS) development for USA client',
        'Written and talked english communication',
        'API developed firebase based',
        'Firebase tool use (Firestore, Functions)',
      ]
    }
  },
  {
    es: {
      timelapse: '04/2019-10/2020',
      title: 'Desarrollador MERN Full stack. Opinaia Social Research.',
      link: {
        href: 'https://www.opinaia.com/',
        text: 'Opinaia'
      },
      skills: [
        'Desarrollo de web apps para uso interno y clientes según asignaciones en Jira',
        'Mantención e implementación de nuevas features. Compatibilidad con navegadores viejos (IE11) de proyectos',
        'Dockerización de proyectos',
        'Uso integral de git. Revisión de merge request de otros desarrolladores',
        'Gitlab CI básico',
      ]
    },
    en: {
      timelapse: '04/2019-10/2020',
      title: 'Full stack MERN developer. Opinaia Social Research.',
      link: {
        href: 'https://www.opinaia.com/en',
        text: 'Opinaia'
      },
      skills: [
        'Web apps development for internal and clients use according to Jira cards',
        'Maintenance and implementation of new features. Keeping to compatibility with old browsers (IE11) on some cases',
        'Projects dockerization',
        'Full git use. Review of other developers merge requests',
        'Basic gitlab CI',
      ]
    }
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
    es: { time: '2020', title: 'Learn react in a fun way. Create sudoku with React', href: 'https://www.udemy.com/course/learn-react-in-a-fun-way-create-sudoku-with-react/', extra: '. Udemy.' },
    en: { time: '2020', title: 'Learn react in a fun way. Create sudoku with React', href: 'https://www.udemy.com/course/learn-react-in-a-fun-way-create-sudoku-with-react/', extra: '. Udemy.' }
  },
  {
    es: { time: '2020', title: 'Nest.js Series', href: 'https://www.youtube.com/playlist?list=PLzHaXzj_WAyk9NF0OIa1gRYqAntHF0fMF', extra: '. Youtube.' },
    en: { time: '2020', title: 'Nest.js Series', href: 'https://www.youtube.com/playlist?list=PLzHaXzj_WAyk9NF0OIa1gRYqAntHF0fMF', extra: '. Youtube.' }
  },
  {
    es: { time: '2020', title: 'La biblia de Node.js', href: 'https://www.udemy.com/course/la-biblia-de-nodejs', extra: '. Udemy.' },
    en: { time: '2020', title: 'Node.js bible', href: 'https://www.udemy.com/course/la-biblia-de-nodejs', extra: '. Udemy.' }
  },
  {
    es: { time: '2019', title: 'Entrenamiento de liderazco personal y coaching ontológico. Consultora CIELO.' },
    en: { time: '2019', title: 'Ontological coaching and personal leadership training. CIELO consultant.' }
  },
  {
    es: { time: '2019', title: 'Docker and Kubernetes: The Complete Guide', href: 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide', extra: '. Udemy.' },
    en: { time: '2019', title: 'Docker and Kubernetes: The Complete Guide', href: 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide', extra: '. Udemy.' }
  },
  {
    es: { time: '2019', title: 'Modern React with Redux', href: 'https://www.udemy.com/course/react-redux', extra: '. Udemy.' },
    en: { time: '2019', title: 'Modern React with Redux', href: 'https://www.udemy.com/course/react-redux', extra: '. Udemy.' }
  },
  {
    es: { time: '2018', title: 'Curso stack MEAN de desarrollo web. Platzi.' },
    en: { time: '2018', title: 'MEAN stack web development. Platzi.' }
  },
  {
    es: { time: '2016', title: 'Responsive web design & Bootstrap. Educación IT.' },
    en: { time: '2016', title: 'Responsive web design & Bootstrap. Educación IT.' }
  },
  {
    es: { time: '2012', title: 'Armado y Mantenimiento de Redes, IAC, Filial Devoto, Prof. Alejandro Nacir.' },
    en: { time: '2012', title: 'Network setup and maintenance, IAC, Subsidiary Devoto, Tchr. Alejandro Nacir.' }
  },
  {
    es: { time: '2011', title: 'Armado y Reparación de PC’s, IAC, Filial San Martin Prof. Alejandro Nacir.' },
    en: { time: '2011', title: 'PC setup and repair, IAC, Subsidiary San Martin, Tchr. Alejandro Nacir.' }
  },
];

const skills = [
  // GIT
  {
    es: {
      title: 'Git',
      details: [
        { icon: 'bolt', text: 'Conventional commits.' },
        { icon: 'bolt', text: 'Git hooks para testing & lintern.' },
        { icon: 'cogs', text: 'Git kraken.' },
        { icon: 'cogs', text: 'Github, gitlab.' },
        { icon: 'code', text: 'Revisión de merge requests.' },
        { icon: 'code', text: 'Reflog, stash, cherry-pick, squash.' },
      ]
    },
    en: {
      title: 'Git',
      details: [
        { icon: 'bolt', text: 'Conventional commits.' },
        { icon: 'bolt', text: 'Git hooks for testing & lintern.' },
        { icon: 'cogs', text: 'Git kraken.' },
        { icon: 'cogs', text: 'Github, gitlab.' },
        { icon: 'code', text: 'Merge requests review.' },
        { icon: 'code', text: 'Reflog, stash, cherry-pick, squash.' },
      ]
    }
  },
  // Mongo
  {
    es: {
      title: 'MongoDB',
      details: [
        { icon: 'cogs', text: 'Agreggation Framework, indexes.' },
        { icon: 'cogs', text: 'mongo shell.' }
      ]
    },
    en: {
      title: 'MongoDB',
      details: [
        { icon: 'cogs', text: 'Agreggation Framework, indexes.' },
        { icon: 'cogs', text: 'mongo shell.' }
      ]
    }
  },
  // ANGULAR
  {
    es: {
      title: 'Angular',
      details: [
        { icon: 'bolt', text: 'Test sobre componentes y servicios, TestBed' },
        { icon: 'code', text: 'SPA, service worker, PWA.' },
        { icon: 'code', text: 'HttpClient, Lifecicle hooks, Interceptors.' },
        { icon: 'cogs', text: 'Angular CLI, Angular material UI.' },
      ]
    },

    en: {
      title: 'Angular',
      details: [
        { icon: 'bolt', text: 'Component & service testing, TestBed' },
        { icon: 'code', text: 'SPA, service worker, PWA.' },
        { icon: 'code', text: 'HttpClient, Lifecicle hooks, Interceptors.' },
        { icon: 'cogs', text: 'Angular CLI, Angular material UI.' },
      ]
    }
  },
  // Docker
  {
    es: {
      title: 'Docker & Docker compose',
      details: [
        { icon: 'code', text: 'Dockerfile, docker-compose.yml.' },
        { icon: 'cogs', text: 'Docker HUB.' },
        { icon: 'cogs', text: 'Docker CLI, docker-compose.' },
        { icon: 'cogs', text: 'Dockerizacion de proyectos existentes.' }
      ]
    },
    en: {
      title: 'Docker & Docker compose',
      details: [
        { icon: 'code', text: 'Dockerfile, docker-compose.yml.' },
        { icon: 'cogs', text: 'Docker HUB.' },
        { icon: 'cogs', text: 'Docker CLI, docker-compose.' },
        { icon: 'cogs', text: 'Existing projects dockerization.' }
      ]
    }
  },
  // Nodejs
  {
    es: {
      title: 'Node Js',
      details: [
        { icon: 'cogs', text: 'Aplicaciones de backend.' },
        { icon: 'code', text: 'expressjs, mongoosejs, sequelize, oclif, moment.' },
        { icon: 'code', text: 'inversify, event loop' },
      ]
    },
    en: {
      title: 'Node Js',
      details: [
        { icon: 'cogs', text: 'Backend apps.' },
        { icon: 'code', text: 'expressjs, mongoosejs, sequelize, oclif, moment.' },
        { icon: 'code', text: 'inversify, event loop' },
      ]
    }
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
      title: 'React',
      details: [
        { icon: 'bolt', text: 'NextJs' },
        { icon: 'bolt', text: 'Hooks: useState, useEffect, useMemo, useForm, entre otros.' }, 
        { icon: 'code', text: 'Context, creación y consumo' },
        { icon: 'code', text: 'Redux, thunk, global stage.' },
        { icon: 'code', text: 'Componentes funcionales' }, 
        { icon: 'cogs', text: 'Web apps, consumo de APIs consume.' }
      ]
    },
    en: {
      title: 'React',
      details: [
        { icon: 'bolt', text: 'NextJs' },
        { icon: 'bolt', text: 'Hooks: useState, useEffect, useMemo, useForm, others.' }, 
        { icon: 'code', text: 'Context, use & creation' },
        { icon: 'code', text: 'Redux, thunk, global stage.' },
        { icon: 'code', text: 'Functional components' }, 
        { icon: 'cogs', text: 'Web apps, APIs consume.' }
      ]
    }
  },
  // General
  {
    es: {
      title: 'Herramientas generales',
      details: [
        { icon: 'cogs', text: 'VSCode.' },
        { icon: 'cogs', text: 'MacOS, Ubuntu, KDE Neon, Windows.' },
        { icon: 'cogs', text: 'Bash, terminal, manejo de consola.' },
        { icon: 'cogs', text: 'Ofimáticas (MS office, libre office, GDocs).' },
        { icon: 'cogs', text: 'Photoshop, GIMP.' },
        { icon: 'cogs', text: 'Illustrator, Inkscape.' },
        { icon: 'cogs', text: 'Robo3T.' },
        { icon: 'cogs', text: 'Jira, trello, slack, gmail.' }
      ]
    },
    en: {
      title: 'General tools',
      details: [
        { icon: 'cogs', text: 'VSCode.' },
        { icon: 'cogs', text: 'MacOS, Ubuntu, KDE Neon, Windows.' },
        { icon: 'cogs', text: 'Bash, terminal, console handeling.' },
        { icon: 'cogs', text: 'Ofimatics (MS office, open office, GDocs).' },
        { icon: 'cogs', text: 'Photoshop, GIMP.' },
        { icon: 'cogs', text: 'Illustrator, Inkscape.' },
        { icon: 'cogs', text: 'Robo3T.' },
        { icon: 'cogs', text: 'Jira, trello, slack, gmail.' }
      ]
    }
  },
];

const body = {
  descriptions,
  degreeStudies,
  experiences,
  courses,
  skills,
  lastUpdate
};

const leftBar = {
  contactChannels,
  careerGoals,
  whoIAmItems,
  basicData
}

export {
  availablesLanguages,
  leftBar,
  body
};