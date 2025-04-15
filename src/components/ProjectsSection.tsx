import React, { useState } from "react";
import { ExternalLink, Github, FolderOpen } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  
  const projects = [
    {
      title: "Credit Risk Analysis Using Random Forest model",
      description:
        "Developed a machine learning-based predictive model to assess credit risk and predict loan defaults using a realistic dataset of borrower and loan characteristics. Focused on binary classification (loan status: 0 for no default, 1 for default) to assist financial institutions in evaluating lending risks. Utilized a Random Forest model, achieving 93% accuracy in predicting defaults, and identified key predictors such as loan-to-income ratio, borrower income, loan amount, and interest rate.",
      technologies: ["Machine Learning", "Data Analysis", "Data Classification", "Random Forest"],
      github: "https://github.com/yourusername/credit-risk-analysis",
      // demo: "https://credit-risk-analysis-demo.com",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "data",
      featured: true,
    },
    {
      title: "Customer Segmentation Using Dimensionality Reduction and Clustering Techniques",
      description:
        "Developed a data-driven customer segmentation framework using unsupervised machine learning techniques as part of a research project at the University of Missouri-Columbia. Applied Principal Component Analysis (PCA) and Autoencoders for dimensionality reduction, followed by K-Means and DBSCAN clustering, to analyze a Kaggle sales dataset of purchasing behaviors. Achieved optimal results with Autoencoder-enhanced K-Means, identifying three distinct customer segments.",
      technologies: ["Unsupervised Learning", "k-means clustering", "Autoencoders", "Principal Component Analysis"],
      github: "https://github.com/yourusername/customer-segmentation",
      // demo: "https://customer-segmentation-demo.com",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "data",
      featured: true,
    },
    {
      title: "Twitter Engagement Forecasting",
      description:
        "Analyzed 80,000+ tweets with PySpark to predict engagement (R² = 0.96, MAE = 121.53). Conducted sentiment analysis and mapped geographic trends for public health communication insights.",
      technologies: ["Python", "PySpark", "Machine Learning", "Data Analysis"],
      github: "https://github.com/yourusername/twitter-forecasting",
      category: "data",
      featured: false,
    },
    {
      title: "Price Scraping System",
      description:
        "Developed a Python-based web scraping tool using Selenium to track prices across different states and stores. Implemented automated data collection pipelines with MySQL database for trend analysis.",
      technologies: ["Python", "Selenium", "MySQL", "Web Scraping"],
      github: "https://github.com/yourusername/price-scraper",
      category: "backend",
      featured: false,
    }
  ];

  const filteredProjects = 
    filter === "all" 
      ? projects 
      : filter === "featured"
        ? projects.filter(project => project.featured)
        : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="bg-pattern">
      <div className="container">
        <h2 className="section-heading gradient-text">Projects I've Built</h2>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {["all", "featured", "frontend", "backend", "fullstack"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                  : "bg-card text-muted-foreground hover:bg-accent/10 hover:text-accent"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="modern-card"
            >
              {/* Project image */}
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    {project.featured && (
                      <span className="text-xs font-mono text-accent mb-1 block">
                        Featured Project
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                      >
                        <Github size={18} />
                        <span className="sr-only">GitHub</span>
                      </a>
                    )}
                    {/* {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-portfolio-accent transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                        <span className="sr-only">External Link</span>
                      </a>
                    )} */}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <ul className="flex flex-wrap text-xs font-mono text-muted-foreground gap-x-3 gap-y-2">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="bg-muted/50 px-2 py-1 rounded-full">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
