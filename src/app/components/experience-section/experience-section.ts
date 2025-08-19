import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  logo: string;
  title: string;
  date: string;
  responsibilities: string[];
  bgColor: string;
  accentColor: string;
  textColor: string;
}

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.scss'
})
export class ExperienceSectionComponent {
  experiences: Experience[] = [
    {
      company: "University of Missouri",
      logo: "/images/company-logos/mizzou.png",
      title: "Backend Developer (Research Assistant)",
      date: "January 2024 - Present",
      responsibilities: [
        "Engineered a cloud-based docker containerized web platform for plant‑protein‑phosphorylation analysis",
        "Optimized MySQL and MongoDB through indexing and normalization, improving query performance by 20%",
        "Developed 25+ RESTful endpoints using Python FastAPI and Flask; integrated with Angular for real-time data exchange",
        "Configured secure EC2 infrastructure with SSL, automated deployments via GitHub workflows, achieving 99.5% uptime",
        "Automated operations with shell scripts for disk usage monitoring, log rotation, and SSL renewals on cron",
      ],
      bgColor: "bg-blue-600",
      accentColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      company: "Siemens Healthineers",
      logo: "/images/company-logos/siemens.png",
      title: "Data Science Intern (Business Analytics)",
      date: "May 2024 - Aug 2024",
      responsibilities: [
        "Enhanced workforce planning models using Python, SQL, and stats; improved prediction accuracy by 25%",
        "Implemented data warehousing on Snowflake, improving query performance and accessibility",
        "Designed 20+ Qlik Cloud dashboards; validated features with OLS and AIC/BIC, eliminating redundant variables",
        "Automated preprocessing with Python; productionized analytics and ad‑hoc reporting",
        "Leveraged Databricks to streamline data workflows and collaboration",
      ],
      bgColor: "bg-green-600",
      accentColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      company: "Tech Mahindra",
      logo: "/images/company-logos/tech-mahindra.png",
      title: "Senior Software Engineer",
      date: "February 2023 - July 2023",
      responsibilities: [
        "Architected and deployed scalable Java/Spring Boot microservices with real-time monitoring",
        "Integrated Kafka for async inter-service messaging; improved resilience and decoupling",
        "Adopted AWS (EC2, S3, CloudWatch) for scalable deployments and observability",
        "Reduced release bottlenecks through CI/CD improvements; mentored 4 engineers",
        "Optimized PostgreSQL and SQL Server; improved data access performance by 25%",
      ],
      bgColor: "bg-purple-600",
      accentColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      company: "LTIMINDTREE",
      logo: "/images/company-logos/ltimindtree.png",
      title: "Data Engineer",
      date: "May 2020 - February 2023",
      responsibilities: [
        "Developed data applications with Java, Apache Spark, Spring Boot, RESTful services, and microservices",
        "Built and maintained ETL pipelines with Spark/PySpark for large-scale, multi-format data processing",
        "Optimized ETL via partitioning and caching; increased throughput and processing speed by 30%",
        "Improved Hive operations by 28% and implemented Kerberos-based authentication",
        "Reduced memory usage by 15% in high‑traffic apps via multi‑threading and memory optimizations",
        "Built CI/CD with Jenkins; implemented real-time monitoring using Prometheus and Grafana",
        "Implemented RabbitMQ for reliable async messaging and system resilience",
        "Achieved 89% code coverage with JUnit and automated tests",
      ],
      bgColor: "bg-indigo-600",
      accentColor: "bg-indigo-50",
      textColor: "text-indigo-600",
    },
    {
      company: "Tata Consultancy Services",
      logo: "/images/company-logos/tcs.png",
      title: "Assistant System Engineer",
      date: "June 2019 - March 2020",
      responsibilities: [
        "Configured and managed enterprise security platforms (Firewall, VPN, Proxy) across multiple clients",
        "Handled 7–8 daily incidents with high first-call resolution; improved cross-team communication",
        "Created and maintained regular security and performance reports to identify trends and inform stakeholders",
      ],
      bgColor: "bg-red-600",
      accentColor: "bg-red-50",
      textColor: "text-red-600",
    },
  ];
}
