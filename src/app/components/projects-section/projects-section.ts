import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  image?: string;
  category: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss'
})
export class ProjectsSectionComponent implements OnChanges {
  @Input() selectedFilter: string = "all";
  filter = "all";
  
  projects: Project[] = [
    {
      title: "Twitter Engagement Forecasting",
      description:
        "Analyzed 80,000+ tweets with PySpark to predict engagement (R² = 0.96, MAE = 121.53). Conducted sentiment analysis and mapped geographic trends to support public health communication.",
      technologies: ["Python", "PySpark", "Machine Learning", "Data Analysis"],
      github: "https://github.com/govardhanrk/engagement-forecasting",
      image: "/images/twitter-engagement-poster.png",
      category: "data",
      featured: false,
    },
    {
      title: "Price Scraping System",
      description:
        "Developed a Python-based web scraping tool using Selenium to track prices across different states and stores. Implemented automated data collection pipelines with MySQL database for trend analysis.",
      technologies: ["Python", "Selenium", "MySQL", "Web Scraping"],
      github: "https://github.com/govardhanrk/price-scraper",
      category: "backend",
      featured: false,
    },
    {
      title: "VisionAI: Emergency Assistance for the Visually Impaired",
      description:
        "Developed an AI-powered system to assist visually impaired individuals by providing real-time hazard detection and navigation assistance. The system uses computer vision and natural language processing to identify obstacles and provide voice-based alerts and directions. Achieved 90% accuracy in real-time hazard detection, enabled voice interaction in 3 languages, and reduced navigation errors by 25% through Google Maps API integration.",
      technologies: ["Python", "BLIP-2", "LLaMA-2", "Google APIs", "TensorFlow", "Computer Vision", "NLP"],
      github: "https://github.com/govardhanrk/VisionAI/",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "data",
      featured: true,
    },
    {
      title: "Customer Segmentation Using Dimensionality Reduction and Clustering Techniques",
      description:
        "Developed a data-driven customer segmentation framework using unsupervised machine learning techniques as part of a research project at the University of Missouri-Columbia. Applied Principal Component Analysis (PCA) and Autoencoders for dimensionality reduction, followed by K-Means and DBSCAN clustering, to analyze a Kaggle sales dataset of purchasing behaviors. Achieved optimal results with Autoencoder-enhanced K-Means, identifying three distinct customer segments.",
      technologies: ["Unsupervised Learning", "k-means clustering", "Autoencoders", "Principal Component Analysis"],
      github: "https://github.com/govardhanrk/clustering-segmentation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "data",
      featured: true,
    },
    {
      title: "Credit Risk Analysis Using Random Forest model",
      description:
        "Developed a machine learning-based predictive model to assess credit risk and predict loan defaults using a realistic dataset of borrower and loan characteristics. Focused on binary classification (loan status: 0 for no default, 1 for default) to assist financial institutions in evaluating lending risks. Utilized a Random Forest model, achieving 93% accuracy in predicting defaults, and identified key predictors such as loan-to-income ratio, borrower income, loan amount, and interest rate.",
      technologies: ["Machine Learning", "Data Analysis", "Data Classification", "Random Forest"],
      github: "https://github.com/govardhanrk/credit-risk-analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "data",
      featured: true,
    }
  ];

  get filteredProjects() {
    if (this.filter === "all") {
      return this.projects;
    } else if (this.filter === "featured") {
      return this.projects.filter(project => project.featured);
    } else {
      return this.projects.filter(project => project.category === this.filter);
    }
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedFilter'] && changes['selectedFilter'].currentValue) {
      this.filter = changes['selectedFilter'].currentValue;
    }
  }
}
