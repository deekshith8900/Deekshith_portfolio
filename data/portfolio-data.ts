
export const portfolioData = {
  hero: {
    headline: "Data Engineer. Building Scalable, Production-Grade Data Platforms.",
    subHeadline: "Transforming raw data into reliability. Specialized in high-throughput ETL/ELT pipelines, distributed warehousing, and automated analytical frameworks.",
    cta: "Download Resume",
    ctaLink: "/deekshithalampally_resume.pdf", // Placeholder
  },
  about: {
    title: "About Me",
    content: "Data Engineer with a Master’s in Computer Science and hands-on experience designing fault-tolerant data ecosystems. I don't just move data; I engineer the reliability and scalability of the pipelines that power business intelligence. \n\nAt Cognizant, I architected ETL workflows processing 500K+ daily records and slashed data inconsistency by 40%. My focus is on building idempotent, self-healing systems using Python, SQL, and Cloud infrastructure. Currently seeking full-time Data Engineering roles in the US (OPT Ready).",
  },
  experience: [
    {
      company: "Cognizant",
      role: "Data Engineer",
      period: "Aug 2022 – Aug 2023",
      description: [
        "Designed and maintained end-to-end ETL pipelines ingesting **500,000+ daily records** into centralized SQL warehouses.",
        "Engineered data validation frameworks reducing downstream anomalies and inconsistencies by **40%**.",
        "Built reusable SQL transformation layers, improving data accuracy by **25%** and standardizing metric definitions across the org.",
        "Automated manual reporting workflows, cutting reporting time by **60%** and ensuring 100% SLA adherence."
      ]
    }
  ],
  projects: [
    {
      title: "Production-Grade ETL Pipeline",
      problem: "Need for a resilient data ingestion system capable of handling API failures and ensuring zero data loss during high-volume loads.",
      solution: "Architected a containerized ELT pipeline using **Apache Airflow** and **Docker**. Implemented idempotent loading logic to handle retries without duplication.",
      techStack: ["Python", "Apache Airflow", "Docker", "PostgreSQL", "MinIO"],
      outcomes: [
        "Achieved **100% data reliability** with self-healing mechanisms for API rate limits and pagination.",
        "Ensured **zero data duplication** through idempotent design.",
        "Reduced deployment time by **50%** via Docker containerization."
      ],
      link: "#"
    },
    {
      title: "LogSense-AI (RAG-Powered Analytics)",
      problem: "Traditional keyword searches on distributed system logs were inefficient, leading to slow incident response times.",
      solution: "Built a Semantic Search engine using **RAG (Retrieval-Augmented Generation)**. Ingested logs into a Vector DB (FAISS) and used LLMs to interpret natural language queries.",
      techStack: ["Python", "LangChain", "FAISS", "OpenAI", "Docker", "Streamlit"],
      outcomes: [
        "Reduced Mean Time To Resolution (MTTR) for incidents by **40%**.",
        "Enabled **natural language querying** of complex error logs for non-technical stakeholders.",
        "Scaled to index **10k+ log entries** with sub-second retrieval latency."
      ],
      link: "#"
    },
    {
      title: "YouTube Analytics Data Warehouse",
      problem: "Content performance data was fragmented across API endpoints, making trend analysis impossible.",
      solution: "Designed a centralized Data Warehouse with a Star Schema data model optimized for analytical queries.",
      techStack: ["Python", "SQL", "YouTube Data API", "Tableau"],
      outcomes: [
        "Improved decision-making accuracy by **70%** via consolidated dashboards.",
        "Automated daily data ingestion, saving **10+ hours/week** of manual data entry."
      ],
      link: "#"
    }
  ],
  skills: {
    languages: ["Python", "SQL", "Java", "JavaScript"],
    dataEngineering: ["Apache Airflow", "Spark (PySpark)", "Docker", "Kafka", "ETL/ELT Design", "Data Warehousing"],
    cloudDb: ["AWS (S3, Glue, Lambda, Redshift, EC2)", "PostgreSQL", "MongoDB", "MinIO"],
    tools: ["Git", "Tableau", "Power BI", "Linux/Bash"]
  },
  contact: {
    email: "deekshithalampally@gmail.com",
    linkedin: "https://www.linkedin.com/in/deekshith-alampally-1b8294174",
    github: "https://github.com/deekshith8900"
  }
};
