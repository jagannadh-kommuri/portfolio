export type Palette = { from: string; via: string; to: string; accent: string };
export type Metric = { value: string; label: string };
export type Project = { id: string; title: string; year: string; genre: string; logline: string; stack: string[]; build: string[]; features: string[]; metrics: Metric[]; github?: string; palette: Palette; motif: 'shield' | 'flow' | 'tenants' };
export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export type Certification = { issuer: string; name: string; link: string };
export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export type ProfileId = 'jagannadh' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const profile = {
  "fullName": "Jagannadh K",
  "displayName": "Jagannadh K",
  "firstName": "JAGANNADH",
  "seriesTag": "THE SERIES",
  "originalLabel": "A JAGANNADH ORIGINAL",
  "role": "Software Engineer",
  "tagline": [
    "Backend & Full Stack",
    "Cloud Native",
    "Enterprise AI"
  ],
  "intro": "Software Engineer with 3+ years of experience turning complex workflows into reliable applications. I build Java and Spring Boot services, React experiences, and AI-powered knowledge systems across Azure and AWS.",
  "location": "New York, NY",
  "email": "jagannadhk8@gmail.com",
  "phone": "816-815-6344",
  "links": {
    "linkedin": "https://www.linkedin.com/in/jagannadh-k08",
    "github": "https://github.com/jagannadh-kommuri"
  },
  "resumePdf": "/assets/Jagannadh_K_Resume.pdf",
  "portrait": {
    "src": "/assets/portrait-720.webp",
    "srcSet": "/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w",
    "alt": "Jagannadh K in a burgundy suit"
  },
  "interests": [
    "Distributed Systems",
    "Cloud Architecture",
    "Generative AI"
  ]
};
export const education = [
  {
    "school": "University of Central Missouri",
    "place": "Warrensburg, MO",
    "degree": "M.S. in Computer Science",
    "period": "",
    "score": ""
  }
];
export const experience = [
  {
    "company": "Verizon",
    "role": "Junior Software Engineer \u00b7 Contract",
    "place": "Overland Park, KS",
    "period": "Feb 2025 \u2013 Aug 2026",
    "points": [
      "Developed distributed REST APIs and microservices with Java, Spring Boot, C#, and Python, deployed on Azure App Service and AKS.",
      "Built reusable React and TypeScript components for customer data workflows and asynchronous API integration.",
      "Developed event-driven services with Azure Functions and Service Bus, including retry mechanisms and reliable service communication.",
      "Improved application performance by 30% through backend processing and SQL query optimization.",
      "Implemented RAG search with Azure OpenAI, Semantic Kernel, LangChain, and Qdrant/Chroma supporting 500+ daily AI-assisted requests.",
      "Supported production reliability through automated testing, telemetry, incident investigation, code reviews, Docker, Kubernetes, and CI/CD."
    ]
  },
  {
    "company": "Infosys",
    "role": "Junior Software Engineer",
    "place": "Hyderabad, India",
    "period": "Jul 2022 \u2013 Jul 2023",
    "points": [
      "Developed Java and Spring Boot APIs and backend services for transaction processing and database-driven workflows.",
      "Supported Azure, AWS, Docker, Kubernetes, and Linux environments; resolved deployment and configuration issues.",
      "Optimized SQL queries and indexing and investigated application logs to resolve backend bottlenecks.",
      "Automated build, testing, and deployment workflows with Git, Jenkins, Maven, and CI/CD, reducing deployment and troubleshooting time by 25%."
    ]
  }
];
export const projects: Project[] = [
  {
    "id": "enterprise-knowledge",
    "title": "Enterprise Knowledge Assistant",
    "year": "Featured project",
    "genre": "Generative AI \u2022 RAG \u2022 Backend",
    "logline": "Enterprise knowledge retrieval with grounded search, access controls, and observable AI workflows.",
    "stack": [
      "Python",
      "Azure OpenAI",
      "Semantic Kernel",
      "LangChain",
      "Qdrant",
      "Chroma"
    ],
    "build": [
      "Developed REST APIs and RAG workflows with authentication, retrieval validation, structured error handling, and monitoring for 500+ daily AI-assisted requests.",
      "Designed embedding-based retrieval and vector search with Qdrant and Chroma, integrating prompt management, response validation, and observability."
    ],
    "features": [
      "Embedding-based retrieval and vector search",
      "Authentication and access controls",
      "Retrieval and response validation",
      "Prompt management and token tracking",
      "Logging and monitoring"
    ],
    "metrics": [
      {
        "value": "500+",
        "label": "daily AI-assisted requests"
      }
    ],
    "github": "https://github.com/jagannadh-kommuri/AI-Powered-Enterprise-Knowledge-Assistant-",
    "palette": {
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a",
      "from": "#24060b"
    },
    "motif": "shield"
  },
  {
    "id": "customer-billing",
    "title": "Customer & Billing Platform",
    "year": "Featured project",
    "genre": "Cloud Native \u2022 Microservices \u2022 APIs",
    "logline": "Event-driven services connecting customer, transaction, catalog, fulfillment, and billing workflows.",
    "stack": [
      "Java",
      "Spring Boot",
      "C#",
      "Azure Functions",
      "Service Bus",
      "Azure SQL",
      "Cosmos DB",
      "Docker",
      "AKS"
    ],
    "build": [
      "Built Java/Spring Boot and C# microservices and REST APIs for customer, transaction, catalog, purchase, fulfillment, and billing workflows.",
      "Improved API performance by 35% through SQL query optimization, indexing, asynchronous processing, and backend service tuning, supported by monitoring, automated testing, and CI/CD."
    ],
    "features": [
      "REST APIs and microservices",
      "Event-driven workflows with Service Bus",
      "Asynchronous processing",
      "SQL query optimization and indexing",
      "Automated tests, monitoring, and CI/CD"
    ],
    "metrics": [
      {
        "value": "35%",
        "label": "API performance improvement"
      }
    ],
    "github": "https://github.com/jagannadh-kommuri/Cloud-Native-Customer-Billing-Platform-",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    },
    "motif": "flow"
  }
];
export const achievements: Achievement[] = [
  {
    "id": "ai",
    "title": "500+ Daily Requests",
    "org": "Enterprise AI",
    "detail": "RAG workflows with retrieval validation, token tracking, monitoring, and access controls.",
    "laurel": "AI in practice"
  },
  {
    "id": "verizon",
    "title": "30% Improvement",
    "org": "Verizon",
    "detail": "Application performance gains through backend processing and SQL query optimization.",
    "laurel": "Performance"
  },
  {
    "id": "billing",
    "title": "35% Improvement",
    "org": "Billing Platform",
    "detail": "API performance gains through indexing, asynchronous processing, and service tuning.",
    "laurel": "Engineering impact"
  },
  {
    "id": "automation",
    "title": "25% Less Time",
    "org": "Infosys",
    "detail": "Reduced deployment and troubleshooting time through automated build and delivery workflows.",
    "laurel": "Automation"
  },
  {
    "id": "education",
    "title": "M.S. Computer Science",
    "org": "University of Central Missouri",
    "detail": "Graduate education in Computer Science in Warrensburg, Missouri.",
    "laurel": "Education"
  }
];
export const certifications: Certification[] = [
  {
    "issuer": "AWS",
    "name": "AWS Certified Solutions Architect \u2013 Associate (SAA-C03)",
    "link": ""
  },
  {
    "issuer": "OpenEDG",
    "name": "Programming Essentials in Python",
    "link": ""
  },
  {
    "issuer": "Great Learning",
    "name": "Java Programming",
    "link": ""
  },
  {
    "issuer": "Coursera",
    "name": "Deep Learning AI",
    "link": ""
  }
];
export const skillCategories: SkillCategory[] = [
  {
    "id": "languages",
    "title": "Languages",
    "subtitle": "The building blocks",
    "skills": [
      {
        "name": "Java",
        "mono": "Ja"
      },
      {
        "name": "C#",
        "mono": "C#"
      },
      {
        "name": "Python",
        "mono": "Py"
      },
      {
        "name": "TypeScript",
        "mono": "Ty"
      },
      {
        "name": "JavaScript",
        "mono": "Ja"
      },
      {
        "name": "SQL",
        "mono": "SQ"
      }
    ]
  },
  {
    "id": "backend",
    "title": "Backend & Architecture",
    "subtitle": "Reliable services and workflows",
    "skills": [
      {
        "name": "Spring Boot",
        "mono": "Sp"
      },
      {
        "name": "REST APIs",
        "mono": "RE"
      },
      {
        "name": "Microservices",
        "mono": "Mi"
      },
      {
        "name": "Distributed Systems",
        "mono": "Di"
      },
      {
        "name": "Event-Driven Architecture",
        "mono": "Ev"
      }
    ]
  },
  {
    "id": "frontend",
    "title": "Frontend",
    "subtitle": "Connected user experiences",
    "skills": [
      {
        "name": "React",
        "mono": "Re"
      },
      {
        "name": "TypeScript",
        "mono": "Ty"
      },
      {
        "name": "HTML",
        "mono": "HT"
      },
      {
        "name": "CSS",
        "mono": "CS"
      }
    ]
  },
  {
    "id": "ai",
    "title": "Generative AI",
    "subtitle": "Retrieval to response",
    "skills": [
      {
        "name": "Azure OpenAI",
        "mono": "Az"
      },
      {
        "name": "LangChain",
        "mono": "La"
      },
      {
        "name": "Semantic Kernel",
        "mono": "Se"
      },
      {
        "name": "RAG",
        "mono": "RA"
      },
      {
        "name": "Qdrant",
        "mono": "Qd"
      },
      {
        "name": "Chroma",
        "mono": "Ch"
      }
    ]
  },
  {
    "id": "cloud",
    "title": "Cloud & Data",
    "subtitle": "Infrastructure and persistence",
    "skills": [
      {
        "name": "Azure",
        "mono": "Az"
      },
      {
        "name": "AWS",
        "mono": "AW"
      },
      {
        "name": "Azure Functions",
        "mono": "Az"
      },
      {
        "name": "Service Bus",
        "mono": "Se"
      },
      {
        "name": "PostgreSQL",
        "mono": "Po"
      },
      {
        "name": "Azure SQL",
        "mono": "Az"
      },
      {
        "name": "Cosmos DB",
        "mono": "Co"
      },
      {
        "name": "MySQL",
        "mono": "My"
      }
    ]
  },
  {
    "id": "delivery",
    "title": "Delivery & Operations",
    "subtitle": "Build, ship, observe",
    "skills": [
      {
        "name": "Docker",
        "mono": "Do"
      },
      {
        "name": "Kubernetes",
        "mono": "Ku"
      },
      {
        "name": "Linux",
        "mono": "Li"
      },
      {
        "name": "Git",
        "mono": "Gi"
      },
      {
        "name": "Jenkins",
        "mono": "Je"
      },
      {
        "name": "Maven",
        "mono": "Ma"
      },
      {
        "name": "CI/CD",
        "mono": "CI"
      },
      {
        "name": "Automated Testing",
        "mono": "Au"
      },
      {
        "name": "Monitoring",
        "mono": "Mo"
      }
    ]
  }
];
export const skillEvidence: Record<string, string[]> = {
  "Java": [
    "Verizon APIs and microservices",
    "Customer & Billing Platform"
  ],
  "Spring Boot": [
    "Verizon and Infosys backend services"
  ],
  "Python": [
    "Enterprise Knowledge Assistant"
  ],
  "React": [
    "Verizon customer data workflows"
  ],
  "TypeScript": [
    "Verizon reusable UI components"
  ],
  "Azure OpenAI": [
    "Enterprise Knowledge Assistant"
  ],
  "RAG": [
    "500+ daily AI-assisted requests"
  ],
  "Docker": [
    "Cloud application deployments"
  ],
  "Jenkins": [
    "Infosys build and deployment automation"
  ]
};
export const seasons: Season[] = [
  {
    "number": 1,
    "title": "Building the Foundation",
    "period": "Jul 2022 \u2013 Jul 2023",
    "synopsis": "Backend services, production support, and delivery automation at Infosys.",
    "episodes": [
      {
        "code": "S01 E01",
        "title": "Services That Deliver",
        "description": "Developed Java and Spring Boot APIs and backend services for transaction processing and database-driven workflows.",
        "tags": [
          "Java",
          "Spring Boot",
          "SQL"
        ],
        "runtime": "Infosys",
        "palette": {
          "from": "#1c1003",
          "via": "#6b3c06",
          "to": "#0a0806",
          "accent": "#ffb547"
        }
      },
      {
        "code": "S01 E02",
        "title": "Automate the Repetition",
        "description": "Automated build, testing, and deployment workflows with Git, Jenkins, Maven, and CI/CD, reducing deployment and troubleshooting time by 25%.",
        "tags": [
          "Jenkins",
          "Maven",
          "CI/CD"
        ],
        "runtime": "25% less time",
        "palette": {
          "from": "#04121f",
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff"
        }
      }
    ]
  },
  {
    "number": 2,
    "title": "Cloud, Customers & AI",
    "period": "Feb 2025 \u2013 Aug 2026",
    "synopsis": "Distributed services and AI-powered applications at Verizon.",
    "episodes": [
      {
        "code": "S02 E01",
        "title": "The Full-Stack Chapter",
        "description": "Developed distributed REST APIs and microservices with Java, Spring Boot, C#, and Python, deployed on Azure App Service and AKS.",
        "tags": [
          "Java",
          "React",
          "Azure",
          "AKS"
        ],
        "runtime": "Verizon \u00b7 Contract",
        "palette": {
          "from": "#04121f",
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff"
        }
      },
      {
        "code": "S02 E02",
        "title": "Knowledge, Retrieved",
        "description": "Implemented RAG search with Azure OpenAI, Semantic Kernel, LangChain, and Qdrant/Chroma supporting 500+ daily AI-assisted requests.",
        "tags": [
          "Azure OpenAI",
          "RAG",
          "Vector Search"
        ],
        "runtime": "500+ daily requests",
        "palette": {
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a",
          "from": "#24060b"
        }
      },
      {
        "code": "S02 E03",
        "title": "Faster by Design",
        "description": "Improved application performance by 30% through backend processing and SQL query optimization.",
        "tags": [
          "SQL",
          "Performance"
        ],
        "runtime": "30% improvement",
        "palette": {
          "from": "#1c1003",
          "via": "#6b3c06",
          "to": "#0a0806",
          "accent": "#ffb547"
        }
      }
    ]
  },
  {
    "number": 3,
    "title": "Selected Engineering Work",
    "period": "Project collection",
    "synopsis": "Two projects combining backend engineering, cloud architecture, and generative AI.",
    "episodes": [
      {
        "code": "S03 E01",
        "title": "Enterprise Knowledge Assistant",
        "description": "Enterprise knowledge retrieval with grounded search, access controls, and observable AI workflows.",
        "tags": [
          "Python",
          "Azure OpenAI",
          "Semantic Kernel",
          "LangChain"
        ],
        "runtime": "Featured project",
        "palette": {
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a",
          "from": "#24060b"
        }
      },
      {
        "code": "S03 E02",
        "title": "Customer & Billing Platform",
        "description": "Event-driven services connecting customer, transaction, catalog, fulfillment, and billing workflows.",
        "tags": [
          "Java",
          "Spring Boot",
          "C#",
          "Azure Functions"
        ],
        "runtime": "Featured project",
        "palette": {
          "from": "#04121f",
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff"
        }
      }
    ]
  }
];
export const topPicks: TopPick[] = [
  {
    "label": "Backend",
    "title": "Java & Spring Boot",
    "detail": "REST APIs and distributed microservices",
    "palette": {
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a",
      "from": "#24060b"
    }
  },
  {
    "label": "Enterprise AI",
    "title": "Knowledge Assistant",
    "detail": "500+ daily AI-assisted requests",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  {
    "label": "Cloud platform",
    "title": "Customer & Billing",
    "detail": "35% API performance improvement",
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    }
  },
  {
    "label": "Experience",
    "title": "Verizon",
    "detail": "Feb 2025 \u2013 Aug 2026 \u00b7 Contract",
    "palette": {
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a",
      "from": "#24060b"
    }
  },
  {
    "label": "Experience",
    "title": "Infosys",
    "detail": "Jul 2022 \u2013 Jul 2023",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  {
    "label": "Education",
    "title": "M.S. Computer Science",
    "detail": "University of Central Missouri",
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    }
  },
  {
    "label": "Certification",
    "title": "AWS Solutions Architect",
    "detail": "Associate \u00b7 SAA-C03",
    "palette": {
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a",
      "from": "#24060b"
    }
  },
  {
    "label": "Frontend",
    "title": "React & TypeScript",
    "detail": "Reusable components and asynchronous workflows",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  {
    "label": "Cloud architecture",
    "title": "Azure & AWS",
    "detail": "Cloud-native applications and deployments",
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    }
  },
  {
    "label": "Delivery",
    "title": "Testing & CI/CD",
    "detail": "Jenkins \u00b7 Docker \u00b7 Kubernetes",
    "palette": {
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a",
      "from": "#24060b"
    }
  }
];
export const introSlides: IntroSlide[] = [
  {
    "kicker": "Introducing",
    "title": "Jagannadh K",
    "lines": [
      "Software Engineer \u00b7 New York, NY",
      "3+ years building backend, full-stack, cloud, and AI-enabled applications."
    ]
  },
  {
    "kicker": "Experience",
    "title": "Built for real workflows",
    "lines": [
      "Verizon \u00b7 Junior Software Engineer \u00b7 Feb 2025 \u2013 Aug 2026",
      "Infosys \u00b7 Junior Software Engineer \u00b7 Jul 2022 \u2013 Jul 2023"
    ],
    "chips": [
      "Java",
      "Spring Boot",
      "React",
      "Azure"
    ]
  },
  {
    "kicker": "Enterprise AI",
    "title": "Knowledge into answers",
    "lines": [
      "RAG and vector search supporting 500+ daily AI-assisted requests.",
      "Retrieval validation, token tracking, monitoring, and access controls."
    ]
  },
  {
    "kicker": "Engineering impact",
    "title": "Performance matters",
    "lines": [
      "30% application performance improvement at Verizon.",
      "35% API performance improvement in the billing platform.",
      "25% reduction in deployment and troubleshooting time at Infosys."
    ]
  },
  {
    "kicker": "Education & credentials",
    "title": "Always building",
    "lines": [
      "M.S. Computer Science \u00b7 University of Central Missouri",
      "AWS Certified Solutions Architect \u2013 Associate"
    ],
    "chips": [
      "Cloud",
      "Distributed Systems",
      "Generative AI"
    ]
  }
];
const crimson = {"via": "#6e0d1d", "to": "#09070a", "accent": "#ff3d5a", "from": "#24060b"};
const ocean = {"from": "#04121f", "via": "#0f4c6e", "to": "#05080d", "accent": "#4cc9ff"};
const amber = {"from": "#1c1003", "via": "#6b3c06", "to": "#0a0806", "accent": "#ffb547"};
const violet = {"from": "#04121f", "via": "#0f4c6e", "to": "#05080d", "accent": "#4cc9ff"};
const jade = {"from": "#1c1003", "via": "#6b3c06", "to": "#0a0806", "accent": "#ffb547"};
export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'jagannadh',
    name: 'Jagannadh',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Selected work`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};

