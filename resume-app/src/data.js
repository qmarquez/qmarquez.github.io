import React from 'react';
import argentinaFlag from './assets/argentina.svg';
import usaFlag from './assets/usa.svg';
import { translation } from './i18n/i18n_translations.enum';

const availablesLanguages = [
  {
    img: argentinaFlag,
    imgAlt: 'argentina flag',
    text: 'v.Español',
    href: 'es'
  }, {
    img: usaFlag,
    imgAlt: 'usa flag',
    text: 'v.English',
    href: 'en'
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
      data: <React.Fragment>qmarquez@<wbr />est.<wbr />frba.<wbr />utn.<wbr />edu.<wbr />ar</React.Fragment>
    }
  ],
  notPrintable: [
    { href: 'https://www.linkedin.com/in/quimarquez/', prefix: 'fab', image: 'linkedin' },
    { href: 'mailto:qmarquez@est.frba.utn.edu.ar', image: 'envelope-square' },
    { href: 'https://github.com/qmarquez', prefix: 'fab', image: 'github' },
    { href: 'https://t.me/qmarquez', prefix: 'fab', image: 'telegram' }
  ]
}

const careerGoals = [
  {
    en: 'Reach major seniority on web development, mainly using JS based techs',
    es: 'Especializarme a senior de desarrollo full stack principalmente con tecnologías JavaScript'
  },
  {
    en: 'Deepen the ability to guide new teammates in the challenges and projects that integrate',
    es: 'Profundizar la capacidad de guiar a nuevos compañeros de equipo en los distintos desafíos y proyectos que integre'
  },
  {
    en: 'Grows on experience and abilities over aux techs related to to develompent (git, containers, devops)',
    es: 'Adquirir experiencia y habilidades profundas en tecnologías auxiliares a la programación (git, containers, devops)'
  },
  {
    en: 'Keep on training over analysis, design, implementation and good practices at development',
    es: 'Profundizar mi experiencia sobre analisis, diseño, implementaciones y buenas prácticas de desarrollo'
  },
];

const whoIAmItems = [
  { en: 'Brave', es: 'Valiente' },
  { en: 'Free', es: 'Libre' },
  { en: 'Partner', es: 'Compañero' },
  { en: 'Fast learning', es: 'Rápido aprendizaje' }
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
    en: 'My main goal on a work it\'s integrate proactive teams, with good vibes and win-win way of think that allows me to expand an put my creative and development skills to service. Where listen be heard and taken into account are default values. With fair compensation and sufficient management of my time to continue my independent projects. With fair compensation and enough time management to continue my independent projects.'
  },
  {
    es: 'Me desempeño como desarrollador desde el año 2013, en mis comiezos realicé taréas con tecnologías Microsoft (Desktop C#, SQL Server). Hoy en día mi interés y foco está puesto en especializarme con tecnologías web, JavaScript en todos sus sabores principamente. Mas allá de eso estoy abierto y dispuesto al aprendizaje de otras tecnologías (Python, Go, Deno) y paradigmas (funcional, lógico, objetos).',
    en: 'From 2013 i\'m work as developer, at start i mainly used Microsoft techs like Desktop C# and SQL Server. Now a day i\'m focusing over web technologies like JavaScript, on all it\'s flavours (frontend, backend, over frameworks, vanilla JS). Beyond that i\'m keep open my mind to learn other technologies (like Python, Go, Deno) and paradigms (functional, logic, object).'
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
    es: {
      timelapse: '04/2019-actualidad',
      title: 'Desarrollador MERN Full stack. Opinaia Social Research.',
      link: {
        href: 'https://www.opinaia.com/es',
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
      timelapse: '04/2019-present',
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
  {
    es: {
      timelapse: '04/2018-actualidad',
      title: 'Desarrollador MEAN Full stack. Autónomo.',
      link: {
        href: 'http://asistentemr.herokuapp.com/',
        text: 'Asistente empresarial'
      },
      skills: [
        'Análisis y desarrollo de soluciones para asistir en procesos de contacto de prospectos y venta de productos',
        'Organización, detalle y priorización de tareas en Jira',
        'Investigación e implementación de buenas prácticas de desarrollo',
      ]
    },
    en: {
      timelapse: '04/2018-present',
      title: 'Full stack MEAN developer. Freelance.',
      link: {
        href: 'http://asistentemr.herokuapp.com/',
        text: 'Asistente empresarial'
      },
      skills: [
        'Analysis and development of solutions to assist in processes of contact prospects and product sales',
        'Organization, detail and prioritization of Jira tasks',
        'Good development practices research and implementation',
      ]
    }
  },
  {
    es: {
      timelapse: '2013-2016',
      title: 'Programador. Droguería saporiti.',
      skills: [
        'Guía, acompañamiento y enseñanza a nuevos compañeros al equipo de trabajo sobre los sistemas y tecnologías existentes en la empresa',
        'Análisis y relevación de requerimientos para nuevos sistemas dentro de la empresa',
        'Mantenimiento, creación y ampliación del alcance de programas de escritorio internos',
        'Mantenimiento y migración a nuevas tecnologías de sistemas viejos',
      ]
    },
    en: {
      timelapse: '2013-2016',
      title: 'Developer. Droguería saporiti.',
      skills: [
        'New work team-mates guide, support and teaching over systems and technologies existing in company',
        'Analysis the requirements for new enterprise develops',
        'Internal desktop programs maintenance, creation and scope upgrade',
        'Old systems maintenance and migration to new technologies',
      ]
    }
  }
];

const courses = [
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
  {
    es: {
      title: 'Angular 4+',
      time: '23 meses.',
      details: [
        { icon: 'code', text: 'SPA, service worker, PWA.' },
        { icon: 'code', text: 'HttpClient, Lifecicle hooks, Interceptors.' },
        { icon: 'cogs', text: 'Angular CLI, Angular material UI, TypeScript.' },
        { icon: 'cogs', text: 'Actualizar a nuevos realeses del framework (ej. 4-&gt;6).' }
      ]
    },

    en: {
      title: 'Angular 4+',
      time: '23 months.',
      details: [
        { icon: 'code', text: 'SPA, service worker, PWA.' },
        { icon: 'code', text: 'HttpClient, Lifecicle hooks, Interceptors.' },
        { icon: 'cogs', text: 'Angular CLI, Angular material UI, TypeScript.' },
        { icon: 'cogs', text: 'Framework new realeses upgrade (ex. 4-&gt;6)' }
      ]
    }
  },
  {
    es: {
      title: 'MongoDB',
      time: '23 meses.',
      details: [
        { icon: 'cogs', text: 'Agreggation Framework, indexes.' },
        { icon: 'cogs', text: 'mongo shell.' }
      ]
    },
    en: {
      title: 'MongoDB',
      time: '23 months.',
      details: [
        { icon: 'cogs', text: 'Agreggation Framework, indexes.' },
        { icon: 'cogs', text: 'mongo shell.' }
      ]
    }
  },
  {
    es: {
      title: 'SQL',
      time: '4 years.',
      details: [
        { icon: 'code', text: 'MySQL, T-SQL.' },
        { icon: 'cogs', text: 'Stored procedures, Joins.' },
        { icon: 'cogs', text: 'Consultas básicas.' }
      ]
    },
    en: {
      title: 'SQL',
      time: '4 years.',
      details: [
        { icon: 'code', text: 'MySQL, T-SQL.' },
        { icon: 'cogs', text: 'Stored procedures, Joins.' },
        { icon: 'cogs', text: 'Basics CRUDs.' }
      ]
    }
  },
  {
    es: {
      title: 'Git',
      details: [
        { icon: 'code', text: 'Revisión de merge requests.' },
        { icon: 'code', text: 'Reflog, stash, cherry-pick, squash.' },
        { icon: 'cogs', text: 'Github, gitlab.' },
        { icon: 'cogs', text: 'Git kraken.' }
      ]
    },
    en: {
      title: 'Git',
      details: [
        { icon: 'code', text: 'Merge requests review.' },
        { icon: 'code', text: 'Reflog, stash, cherry-pick, squash.' },
        { icon: 'cogs', text: 'Github, gitlab.' },
        { icon: 'cogs', text: 'Git kraken.' }
      ]
    }
  },
  {
    es: {
      title: 'React',
      time: '9 meses.',
      details: [
        { icon: 'code', text: 'Redux, thunk, global stage.' },
        { icon: 'code', text: 'Decoradores.' },
        { icon: 'cogs', text: 'Web apps, api consume.' }
      ]
    },
    en: {
      title: 'React',
      time: '9 months.',
      details: [
        { icon: 'code', text: 'Redux, thunk, global stage.' },
        { icon: 'code', text: 'Decorators.' },
        { icon: 'cogs', text: 'Web apps, api consume.' }
      ]
    }
  },
  {
    es: {
      title: 'Node Js',
      time: '23 meses.',
      details: [
        { icon: 'code', text: 'expressjs, mongoosejs, sequelize, oclif.' },
        { icon: 'cogs', text: 'Aplicaciones de backend.' }
      ]
    },
    en: {
      title: 'Node Js',
      time: '23 months.',
      details: [
        { icon: 'code', text: 'expressjs, mongoosejs, sequelize, oclif.' },
        { icon: 'cogs', text: 'Backend apps.' }
      ]
    }
  },
  {
    es: {
      title: 'Docker & Docker compose',
      time: '9 meses.',
      details: [
        { icon: 'code', text: 'Dockerfile, docker-compose.yml.' },
        { icon: 'cogs', text: 'Docker HUB.' },
        { icon: 'cogs', text: 'Docker CLI, docker-compose.' },
        { icon: 'cogs', text: 'Dockerizacion de proyectos existentes.' }
      ]
    },
    en: {
      title: 'Docker & Docker compose',
      time: '9 months.',
      details: [
        { icon: 'code', text: 'Dockerfile, docker-compose.yml.' },
        { icon: 'cogs', text: 'Docker HUB.' },
        { icon: 'cogs', text: 'Docker CLI, docker-compose.' },
        { icon: 'cogs', text: 'Existing projects dockerization.' }
      ]
    }
  },
  {
    es: {
      title: 'Herramientas generales',
      details: [
        { icon: 'cogs', text: 'Ubuntu, KDE Neon, Windows.' },
        { icon: 'cogs', text: 'Bash, terminal, manejo de consola.' },
        { icon: 'cogs', text: 'VSCode, nano.' },
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
        { icon: 'cogs', text: 'Ubuntu, KDE Neon, Windows.' },
        { icon: 'cogs', text: 'Bash, terminal, console handeling.' },
        { icon: 'cogs', text: 'VSCode, nano.' },
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
  skills
};

export {
  availablesLanguages,
  contactChannels,
  careerGoals,
  whoIAmItems,
  basicData,
  body
};