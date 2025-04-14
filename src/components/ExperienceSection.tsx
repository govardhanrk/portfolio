import React, { useState } from "react";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const experiences = [
    {
      company: "University of Missouri",
      logo: "/images/company-logos/mizzou.png",
      title: "Graduate Research Assistant (Backend Developer)",
      date: "January 2024 - Present",
      responsibilities: [
        "Engineered a cloud-based data platform utilizing microservices with Docker containerization and AWS infrastructure for plant-protein-phosphorylation research data analysis",
        "Optimized MySQL and MongoDB, improving query performance by 20% through indexing and normalization",
        "Developed and documented API gateways with over 25 RESTful endpoints using Python FastAPI and Flask",
        "Configured infrastructure on EC2 instances, including domain configuration, SSL certification, and server setup",
        "Implemented automated deployment workflows with Docker and AWS, reducing release cycle time by 40%",
      ],
    },
    {
      company: "Siemens Healthineers",
      logo: "/images/company-logos/siemens.png",
      title: "Data Science Intern (Business Analytics)",
      date: "May 2024 - August 2024",
      responsibilities: [
        "Enhanced workforce planning models using Python, SQL, and statistics, improving prediction accuracy by 25%",
        "Implemented data warehousing solutions with Snowflake, optimizing query performance and data accessibility",
        "Designed over 20 interactive dashboards in Qlik Cloud, eliminating 11 redundant variables in regression model",
        "Developed automation scripts with Python to streamline data preprocessing and transformation workflows",
        "Leveraged Databricks to streamline data workflows and enhance collaboration among data teams",
      ],
    },
    {
      company: "Tech Mahindra",
      logo: "/images/company-logos/tech-mahindra.png",
      title: "Senior Software Engineer",
      date: "February 2023 - July 2023",
      responsibilities: [
        "Architected and deployed scalable microservices for Java and Spring Boot based applications",
        "Integrated Kafka message brokers for async communication between services",
        "Integrated AWS services, including EC2, S3, and CloudWatch, to enable scalability and real-time monitoring",
        "Increased deployment efficiency by identifying and resolving workflow bottlenecks",
        "Optimized PostgreSQL and SQL Server databases, improving data access performance by 25%",
        "Led a team of 4 engineers, mentoring them in backend development and cloud deployment",
      ],
    },
    {
      company: "LTIMINDTREE",
      logo: "/images/company-logos/ltimindtree.png",
      title: "Data Engineer",
      date: "May 2020 - February 2023",
      responsibilities: [
        "Developed data-driven applications using Java, Apache Spark, Spring Boot, and microservice architecture",
        "Built and maintained ETL pipelines using Apache Spark and PySpark for processing various data formats at scale",
        "Optimized ETL pipelines, increasing throughput and data processing speed by 30%",
        "Achieved a 28% optimization of the Hive database operations and implemented Kerberos-based authentication",
        "Enhanced system stability by reducing memory consumption by 15% in high-traffic applications",
        "Implemented comprehensive CI/CD pipeline with Jenkins for automated build, test, and deployment processes",
      ],
    },
    {
      company: "Tata Consultancy Services",
      logo: "/images/company-logos/tcs.png",
      title: "Assistant System Engineer",
      date: "June 2019 - March 2020",
      responsibilities: [
        "Configured and managed comprehensive security platforms (Firewall, VPN, Proxy) to protect 3 client's networks",
        "Coordinated daily administrative tasks and progress reports, improving cross-team communication efficiency",
        "Provided technical support and troubleshooting for 7+ security incidents daily",
        "Created and maintained regular reports on security incidents and platforms to analyze risk and identify trends",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-muted">
      <div className="container">
        <h2 className="section-heading">Where I've Worked</h2>
        <div className="md:grid md:grid-cols-4 gap-8">
          {/* Tabs */}
          <div className="mb-6 md:mb-0">
            <div className="flex md:flex-col overflow-x-auto scrollbar-none md:border-l-0 md:border-l-2 border-border">
              {experiences.map((experience, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTabIndex(idx)}
                  className={`px-5 py-4 text-base font-medium whitespace-nowrap transition-colors duration-300 flex items-center ${
                    idx === activeTabIndex
                      ? "text-portfolio-accent border-b-2 md:border-b-0 md:border-l-2 border-portfolio-accent md:-ml-[2px]"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <div className="w-8 h-8 mr-3 flex-shrink-0">
                    <img 
                      src={experience.logo} 
                      alt={`${experience.company} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        e.currentTarget.src = "/images/placeholder-logo.svg";
                      }}
                    />
                  </div>
                  {experience.company}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Briefcase className="text-portfolio-accent" size={20} />
                <h3 className="text-xl font-bold text-foreground">
                  {experiences[activeTabIndex].title}
                </h3>
              </div>
              <p className="text-muted-foreground">{experiences[activeTabIndex].date}</p>
              <ul className="space-y-2">
                {experiences[activeTabIndex].responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
                    <span className="text-portfolio-accent mt-1">▹</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
