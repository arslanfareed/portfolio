const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://arslanfareed.github.io',
  title: 'AF.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Arslan Fareed',
  role: 'Senior Full Stack & AI Engineer',
  picture: '',

  description:
    'Senior full stack engineer with nearly seven years building production applications on the MERN and MEAN stacks across e-commerce, travel and telecom. Currently focused on AI engineering: MCP servers, RAG pipelines and agentic workflows wired into live products. Delivered a 20% increase in GMV at Daraz (Alibaba Group) on a rebuilt top-up service, and brings additional backend depth in Java and Spring Boot. Based in Karachi, Pakistan.',
  resume: `${process.env.PUBLIC_URL}/Arslan-Fareed-Resume.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/arslan-fareed',
    github: 'https://github.com/arslanfareed',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Daraz',
    description:
      'One of South Asia’s largest e-commerce marketplaces, part of Alibaba Group. Revamped the top-up service, driving a 20% increase in gross merchandise value (GMV).',
    stack: ['React', 'React Native', 'Node.js', 'Angular', 'MySQL', 'Java'],
    livePreview: 'https://www.daraz.pk/',
  },
  {
    name: '5lynx',
    description:
      'A RAG-powered platform that matches homeowners with a single top-rated, licensed service provider for their home projects instead of a list to compare.',
    stack: ['React', 'Node.js', 'RAG', 'PostgreSQL', 'AWS'],
    livePreview: 'https://5lynx.com/',
  },
  {
    name: 'GoZayaan',
    description:
      'An online travel platform for booking flights, hotels and holiday packages, serving travellers in Bangladesh and Pakistan.',
    livePreview: 'https://gozayaan.com/',
  },
  {
    name: 'Pioneer Auctions',
    description:
      'A UAE online auction platform for vehicles, electronics, furniture, real estate, luxury items and industrial equipment across the emirates.',
    livePreview: 'https://www.pioneerauctions.ae/',
  },
  {
    name: 'FuturByte',
    description:
      'Website of a Karachi-based software company delivering mobile apps, web platforms and business systems (ERP, CRM, POS) for clients in the UAE, USA and UK.',
    stack: ['React', 'Next.js', 'Node.js'],
    livePreview: 'https://futurbyte.pk/',
  },
]

const experience = [
  // experience can be added or removed
  // if there is no experience, Experience section won't show up
  {
    company: 'Xynotech',
    role: 'Senior Software Engineer',
    period: 'Mar 2026 - Present',
    highlights: [
      'Built MCP servers and custom tools enabling AI agents to interact directly with internal applications and external services.',
      'Designed and implemented RAG solutions integrating enterprise data sources into AI-powered applications.',
      'Configured Claude-assisted development workflows and coding standards, reducing feature delivery time by 50%.',
    ],
  },
  {
    company: 'Futurbyte',
    role: 'Senior Software Engineer',
    period: 'Mar 2024 - Feb 2026',
    highlights: [
      'Delivered client platforms end to end on React and Node.js, including 5lynx, Edsidera and Eightclouds.',
      'Owned architecture and technology decisions across concurrent client projects.',
      'Established engineering standards adopted by a team of 12 engineers.',
    ],
  },
  {
    company: 'Daraz (Alibaba Group)',
    role: 'Senior Software Engineer',
    period: 'Nov 2021 - Feb 2024',
    highlights: [
      'Revamped the top-up service, driving a 20% increase in GMV.',
      'Investigated and resolved complex production issues, improving platform stability.',
      'Partnered with the product team to define technical solutions.',
    ],
  },
  {
    company: 'Find My Adventure',
    role: 'Senior Software Engineer',
    period: 'Jan 2021 - Nov 2021',
    highlights: [
      'Built 7 new Node.js microservices while migrating a monolith to microservices.',
      'Hardened the authentication service, strengthening account security.',
      'Redesigned the order journey, reducing the steps required to complete an order.',
    ],
  },
  {
    company: 'Inertiasoft',
    role: 'Software Engineer',
    period: 'Nov 2019 - Dec 2020',
    highlights: [
      'Automated OLT/ONT network device configuration, removing manual provisioning.',
      'Reduced script runtime by 90% by moving synchronous processing to an asynchronous model.',
      'Migrated the application to AWS, cutting running costs by 25%.',
    ],
  },
]

const education = [
  // education can be added or removed
  // if there is no education, Education section won't show up
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'IQRA University',
    period: '2015 - 2019',
  },
  {
    degree: 'A-Levels (Pre-Engineering) and O-Levels (Computer Science)',
    institution: 'IGCSE',
    period: '2009 - 2014',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'TypeScript',
  'Java',
  'SQL',
  'React',
  'Next.js',
  'Angular',
  'Ember.js',
  'Redux',
  'Node.js',
  'Express',
  'NestJS',
  'Koa',
  'Spring Boot',
  'Serverless',
  'React Native',
  'Ionic',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'Redis',
  'AWS',
  'Google Cloud',
  'Alibaba Cloud',
  'Docker',
  'CI/CD',
  'MCP',
  'RAG',
  'Agentic AI',
  'Microservices',
  'REST APIs',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'arslan.fareed.engr@gmail.com',
}

export { header, about, projects, experience, education, skills, contact }
