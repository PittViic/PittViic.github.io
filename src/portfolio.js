/* Portfolio de Pedro Victor */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Pedro Victor",
  title: "Olá, eu sou Pedro Victor",
  subTitle: emoji(
    "Cientista da Computação com foco em Ciência de Dados, Machine Learning e desenvolvimento Full Stack. Experiência prática em projetos de IA aplicada à gestão pública, infraestrutura de dados e processamento de linguagem natural."
  ),
  resumeLink: "",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/PittViic",
  linkedin: "https://www.linkedin.com/in/pedro-victor-ssa",
  gmail: "pvictors152004@gmail.com",
  instagram: "https://www.instagram.com/viictorcsv/",
  display: true
};

// Skills Section

const skillsSection = {
  title: "O que eu faço",
  subTitle:
    "ENGENHEIRO DE DADOS & ML QUE TRANSFORMA DADOS EM SOLUÇÕES INTELIGENTES",
  skills: [
    emoji(
      "⚡ Construção de pipelines de dados e infraestrutura de Data Engineering com Python, SQL e AWS"
    ),
    emoji(
      "⚡ Desenvolvimento de modelos de Machine Learning e IA aplicada à detecção de fraudes e análise preditiva"
    ),
    emoji(
      "⚡ Aplicações Full Stack e dashboards interativos com visualização de dados (Power BI, Excel)"
    )
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Flutter/Dart",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-brain"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Instituto Federal do Maranhão",
      logo: require("./assets/images/ifmaLogo.png"),
      subHeader: "Bacharelado em Ciências da Computação",
      duration: "2023 - 2026",
      desc: "Foco em Ciência de Dados, Machine Learning e desenvolvimento de soluções orientadas a dados.",
      descBullets: [
        "Projetos de IA aplicada à gestão pública e detecção de fraudes",
        "Desenvolvimento Full Stack com integração de funcionalidades de IA"
      ]
    },
    {
      schoolName: "Coursera",
      logo: require("./assets/images/courseraLogo.jpg"),
      subHeader: "Google Data Analytics Professional Certificate",
      duration: "2026",
      desc: "Certificação profissional em análise de dados pelo Google.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Data Science & ML",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend & Data Engineering",
      progressPercentage: "65%"
    },
    {
      Stack: "Frontend & Visualização",
      progressPercentage: "55%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Desenvolvedor Full-Stack",
      company: "CredVip",
      companylogo: require("./assets/images/credvipLogo.jpg"),
      date: "Abr 2025 – Atualmente",
      desc: "Desenvolvimento end-to-end de plataformas corporativas com automação de processos e análise de dados.",
      descBullets: [
        "Desenvolvimento de plataformas completas (Front-end e Back-end) para centralização e gestão das operações",
        "Automação de tarefas e processos operacionais, reduzindo intervenções manuais",
        "Manipulação avançada e organização de bancos de dados complexos",
        "Cruzamento e análise de dados para geração de insights estratégicos",
        "Aplicação de IA para criação de animações e recursos visuais"
      ]
    },
    {
      role: "Pesquisador - Construção e Curadoria do Corpus Institucional",
      company: "Instituto Federal do Maranhão - IFMA",
      companylogo: require("./assets/images/ifmaLogo.png"),
      date: "Ago 2026 – Atualmente",
      desc: "Desenvolvimento de pipelines de coleta, processamento e curadoria de acervos textuais para infraestrutura de pesquisas em IA.",
      descBullets: [
        "Desenvolvimento de spiders para extração e ingestão automatizada de acervos textuais heterogêneos com catalogação sistemática de metadados",
        "Processamento de acervo legado com algoritmos de OCR baseados em Deep Learning para padronização e mitigação de ruído documental",
        "Implementação de modelos de Reconhecimento de Entidades Nomeadas via arquiteturas Transformer para pseudonimização de dados sensíveis, em conformidade com a LGPD",
        "Validação matemática de coesão lexical e representatividade do corpus aplicando métricas da linguística quantitativa",
        "Estruturação e disponibilização do corpus curado como infraestrutura para pesquisas em IA, utilizando formatos de alta eficiência"
      ]
    },
    {
      role: "Pesquisador Acadêmico - IA aplicada à Prestação de Contas Públicas",
      company: "Instituto Federal do Maranhão - IFMA",
      companylogo: require("./assets/images/ifmaLogo.png"),
      date: "Nov 2024 – Abr 2025",
      desc: "Concepção de soluções de Machine Learning para otimizar processos de contabilidade e auditoria em órgãos públicos.",
      descBullets: [
        "Concepção e implementação de recursos de IA para otimizar processos de contabilidade dos órgãos governamentais do Maranhão",
        "Desenvolvimento de algoritmos de Machine Learning para classificação e estruturação automatizada de documentos contábeis",
        "Criação de um sistema inteligente de detecção de fraudes para identificar inconsistências, anomalias e desvios financeiros",
        "Engenharia de funcionalidades de IA para pré-processamento e organização de dados financeiros complexos"
      ]
    },
    {
      role: "Desenvolvedor Full-Stack - Fadir",
      company: "Instituto Federal do Maranhão - IFMA",
      companylogo: require("./assets/images/ifmaLogo.png"),
      date: "Ago 2025 – Dez 2025",
      desc: "Criação de aplicativo de gestão para centralizar informações e funcionalidades sociais no IFMA.",
      descBullets: [
        "Criação de um aplicativo de gestão focado nas necessidades dos gestores do IFMA",
        "Centralização de informações e integração de funcionalidades sociais para facilitar a comunicação e administração interna"
      ]
    }
  ]
};

/* Open Source Section */

const openSource = {
  showGithubProfile: "true",
  display: false
};

// Big Projects

const bigProjects = {
  title: "Projetos em Destaque",
  subtitle:
    "PROJETOS DE IMPACTO EM IA, DATA SCIENCE E DESENVOLVIMENTO DE SOFTWARE",
  projects: [
    {
      image: require("./assets/images/fadir-logo.png"),
      projectName: "FADIR",
      projectDesc:
        "Aplicativo de gestão focado nas necessidades dos gestores do IFMA. Centralização de informações e integração de funcionalidades sociais para comunicação e administração interna.",
      footerLink: [
        {
          name: "Ver no GitHub",
          url: "https://github.com/PittViic"
        }
      ]
    },
    {
      image: require("./assets/images/iaAuditoriaProject.png"),
      projectName: "IA Aplicada a Prestação de Contas Públicas",
      projectDesc:
        "Sistema inteligente de detecção de fraudes que identifica inconsistências, anomalias e desvios nas classificações financeiras. Engenharia de funcionalidades de IA para pré-processamento de dados financeiros complexos.",
      footerLink: [
        {
          name: "Ver no GitHub",
          url: "https://github.com/PittViic"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Certificações & Formação"),
  subtitle:
    "Certificações e cursos complementares que fortalecem minha formação profissional",

  achievementsCards: [
    {
      title: "Google Data Analytics Professional Certificate",
      subtitle:
        "Certificação profissional em análise de dados pelo Google — cobrindo coleta, limpeza, análise e visualização de dados.",
      image: require("./assets/images/courseraLogo.jpg"),
      imageAlt: "Google Logo",
      footerLink: []
    },
    {
      title: "Global Consumer Intelligence (GCI) World | Matsuo-Iwasawa Laboratory (The University of Tokyo)",
      subtitle:
        "Domínio em análise prática, processamento de dados e aprendizado de máquina utilizando Python, NumPy, Pandas e Scikit-learn.",
      image: require("./assets/images/matsuo.png"),
      imageAlt: "The University of Tokyo",
      footerLink: []
    },
    {
      title: "Curso Completo de Linguagem C e C++",
      subtitle:
        "Formação completa em C e C++ pela Udemy, com foco em fundamentos de programação, estruturas de dados e algoritmos.",
      image: require("./assets/images/udemyLogo.png"),
      imageAlt: "Udemy Logo",
      footerLink: []
    },
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Currículo",
  subtitle: "Baixe meu currículo",
  display: false
};

const contactInfo = {
  title: emoji("Entre em Contato"),
  subtitle:
    "Quer discutir um projeto ou apenas trocar uma ideia? Estou sempre aberto a novas conexões.",
  number: "",
  email_address: "pvictors152004@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
