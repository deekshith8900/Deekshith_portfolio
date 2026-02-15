
export const portfolioData = {
  hero: {
    headline: "Data Engineer. Building Scalable, Production-Grade Data Platforms.",
    subHeadline: "Data Engineer with 2 years of experience building batch ETL pipelines in retail analytics environments. Experienced in AWS-based data workflows (S3, Redshift), Apache Airflow orchestration, and PySpark transformations.",
    cta: "Download Resume",
    ctaLink: "/deekshithalampally_resume.pdf",
  },
  about: {
    title: "About Me",
    content: "Data Engineer with 2 years of experience building batch ETL pipelines in retail analytics environments. Experienced in AWS-based data workflows (S3, Redshift), Apache Airflow orchestration, and PySpark transformations. Strong foundation in dimensional data modeling, SQL performance optimization, and data quality validation to support scalable reporting systems.",
  },
  experience: [
    {
      company: "Cognizant Technology Solutions",
      role: "Data Engineer (Retail Client)",
      period: "Dec 2022 – Aug 2023",
      description: [
        "Contributed to batch ETL pipelines processing 200K–500K daily retail transaction records into AWS-based analytics systems.",
        "Ingested raw order, inventory, and product datasets into Amazon S3 and supported transformation and loading into Amazon Redshift.",
        "Designed and maintained star schema models including fact_sales and dimension tables (dim_product, dim_store, dim_customer).",
        "Developed SQL transformation logic to support reporting on order volume trends, category performance, and inventory analysis.",
        "Improved reporting latency by optimizing transformation queries and aggregation logic.",
        "Built Python ingestion scripts with schema validation, null handling, structured logging, and retry-safe processing.",
        "Contributed to Apache Airflow DAG development including scheduling, retry configuration, dependency management, and failure monitoring.",
        "Used PySpark to process large historical sales datasets, improving aggregation efficiency for category-level reporting.",
        "Implemented data quality checks validating order counts and inventory reconciliation, reducing reporting discrepancies.",
        "Performed root cause analysis on pipeline failures caused by schema mismatches and missing inventory updates."
      ]
    },
    {
      company: "Kapi Technologies",
      role: "Data Analyst / Junior Data Engineer",
      period: "Aug 2021 – Dec 2022",
      description: [
        "Wrote advanced SQL queries (joins, CTEs, window functions) to analyze daily order volume, inventory stock levels, and category performance across retail stores.",
        "Automated recurring KPI reports using Python (pandas), reducing manual reporting effort by ~30%.",
        "Designed aggregation tables to support dashboards tracking revenue trends, inventory turnover, and product performance.",
        "Cleaned and transformed structured and semi-structured datasets (CSV, JSON, transactional logs).",
        "Improved query performance through indexing and query restructuring, reducing report generation time.",
        "Built Power BI dashboards enabling stakeholders to monitor sales and inventory metrics at regional and store levels.",
        "Collaborated with business stakeholders to define KPIs and validate sales and inventory reporting accuracy."
      ]
    }
  ],
  projects: [
    {
      title: "Production-Grade ELT Pipeline",
      problem: "Need for a resilient data ingestion system capable of handling API failures and ensuring zero data loss during high-volume loads.",
      solution: "Built an end-to-end Airflow-orchestrated ELT pipeline ingesting API data into object storage and PostgreSQL.",
      techStack: ["Python", "Apache Airflow", "Docker", "PostgreSQL", "MinIO"],
      outcomes: [
        "Built an end-to-end Airflow-orchestrated ELT pipeline ingesting API data into object storage and PostgreSQL.",
        "Designed dimensional data models (fact and dimension tables) to support analytics-ready reporting.",
        "Implemented idempotent loading logic to handle pipeline retries, historical backfills, and failure recovery without duplication.",
        "Integrated pagination handling, rate-limit management, structured logging, and retry mechanisms for reliable ingestion.",
        "Containerized the platform using Docker to simulate a production-style data architecture."
      ],
      link: "#"
    },
    {
      title: "YouTube Analytics Data Warehouse",
      problem: "Content performance data was fragmented across API endpoints, making trend analysis impossible.",
      solution: "Automated extraction of YouTube channel performance metrics using Python and REST APIs.",
      techStack: ["Python", "SQL", "YouTube Data API", "Tableau"],
      outcomes: [
        "Automated extraction of YouTube channel performance metrics using Python and REST APIs.",
        "Designed SQL-based warehouse schema tracking views, impressions, CTR, watch time, and subscriber growth.",
        "Built transformation pipelines enabling trend analysis and content performance insights.",
        "Developed Tableau dashboards for visualization and stakeholder reporting."
      ],
      link: "#"
    }
  ],
  skills: {
    languages: ["Python", "SQL"],
    dataEngineering: ["ETL/ELT", "Incremental Loads", "Data Validation", "Star Schema Modeling", "Batch Processing", "Apache Airflow", "PySpark"],
    cloudDb: ["AWS (S3, Redshift, EC2, Lambda)", "PostgreSQL", "MySQL", "SQL Server"],
    tools: ["Docker", "Git", "Jira", "Tableau", "Power BI"]
  },
  contact: {
    email: "deekshithalampally@gmail.com",
    linkedin: "https://www.linkedin.com/in/deekshith-alampally-1b8294174",
    github: "https://github.com/deekshith8900"
  }
};
