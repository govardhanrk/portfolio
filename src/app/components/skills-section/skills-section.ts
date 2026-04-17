import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss'
})
export class SkillsSectionComponent {
  skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      icon: "/images/icons/backend_copying.png",
      skills: ["Java", "Python", "TypeScript", "JavaScript", "C", "C++", "SQL", "HTML", "CSS"]
    },
    {
      name: "Backend & APIs",
      icon: "/images/icons/backend_copying.png",
      skills: ["Spring Boot", "Spring Framework", "FastAPI", "Flask", "Node.js", "Express.js", "REST", "Microservices", "MVC", "RabbitMQ", "Kafka"]
    },
    {
      name: "Data Engineering",
      icon: "/images/icons/ETL.png",
      skills: ["Apache Spark", "PySpark", "Kafka", "Snowflake", "Databricks", "ETL pipelines", "Hadoop", "BigQuery", "Data Warehousing"]
    },
    {
      name: "Databases",
      icon: "/images/icons/ETL.png",
      skills: ["PostgreSQL", "MySQL", "Microsoft SQL Server", "Oracle", "DB2", "MongoDB", "Cassandra", "Azure Cosmos DB", "Azure SQL Database", "NoSQL"]
    },
    {
      name: "Cloud & DevOps",
      icon: "/images/icons/cloud.png",
      skills: ["AWS (EC2, S3, RDS)", "Azure", "Google Cloud Platform", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Azure DevOps", "CI/CD", "Linux", "Maven"]
    },
    {
      name: "Monitoring & Testing",
      icon: "/images/icons/Monitoring.png",
      skills: ["Prometheus", "Grafana", "Power BI", "Qlik Cloud", "SonarQube", "JUnit", "PyTest", "Jest", "Jasmine", "JMeter"]
    },
    {
      name: "ML & AI",
      icon: "/images/icons/brain_idea.png",
      skills: ["Pandas", "NumPy", "scikit-learn", "TensorFlow", "Computer Vision", "NLP", "Ollama", "LLMs / RAG", "Statistics"]
    }
  ];
}
