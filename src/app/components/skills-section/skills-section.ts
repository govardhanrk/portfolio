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
      name: "Backend & APIs",
      icon: "/images/icons/backend_copying.png",
      skills: ["Java", "Spring Boot", "Python", "FastAPI", "Flask", "REST", "Microservices", "RabbitMQ"]
    },
    {
      name: "Data Engineering",
      icon: "/images/icons/ETL.png",
      skills: ["Apache Spark", "PySpark", "Kafka", "Snowflake", "Databricks", "ETL pipelines", "SQL", "Hadoop"]
    },
    {
      name: "Cloud & DevOps",
      icon: "/images/icons/cloud.png",
      skills: ["AWS (EC2, S3, RDS)", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Linux", "Maven"]
    },
    {
      name: "Monitoring & BI",
      icon: "/images/icons/Monitoring.png",
      skills: ["Prometheus", "Grafana", "Power BI", "Qlik Cloud", "SonarQube", "JUnit", "PyTest"]
    },
    {
      name: "ML & Analytics",
      icon: "/images/icons/brain_idea.png",
      skills: ["Pandas", "NumPy", "scikit-learn", "TensorFlow", "Computer Vision", "NLP", "Statistics"]
    }
  ];
}
