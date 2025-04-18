import React from "react";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
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
      icon: <Briefcase className="w-6 h-6 text-white" />,
      bgColor: "bg-blue-600",
      accentColor: "bg-blue-50",
      textColor: "text-blue-600",
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
      icon: <Briefcase className="w-6 h-6 text-white" />,
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
        "Architected and deployed scalable microservices for Java and Spring Boot based applications",
        "Integrated Kafka message brokers for async communication between services",
        "Integrated AWS services, including EC2, S3, and CloudWatch, to enable scalability and real-time monitoring",
        "Increased deployment efficiency by identifying and resolving workflow bottlenecks",
        "Optimized PostgreSQL and SQL Server databases, improving data access performance by 25%",
        "Led a team of 4 engineers, mentoring them in backend development and cloud deployment",
      ],
      icon: <Briefcase className="w-6 h-6 text-white" />,
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
        "Developed data-driven applications using Java, Apache Spark, Spring Boot, and microservice architecture",
        "Built and maintained ETL pipelines using Apache Spark and PySpark for processing various data formats at scale",
        "Optimized ETL pipelines, increasing throughput and data processing speed by 30%",
        "Achieved a 28% optimization of the Hive database operations and implemented Kerberos-based authentication",
        "Enhanced system stability by reducing memory consumption by 15% in high-traffic applications",
        "Implemented comprehensive CI/CD pipeline with Jenkins for automated build, test, and deployment processes",
      ],
      icon: <Briefcase className="w-6 h-6 text-white" />,
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
        "Configured and managed comprehensive security platforms (Firewall, VPN, Proxy) to protect 3 client's networks",
        "Coordinated daily administrative tasks and progress reports, improving cross-team communication efficiency",
        "Provided technical support and troubleshooting for 7+ security incidents daily",
        "Created and maintained regular reports on security incidents and platforms to analyze risk and identify trends",
      ],
      icon: <Briefcase className="w-6 h-6 text-white" />,
      bgColor: "bg-red-600",
      accentColor: "bg-red-50",
      textColor: "text-red-600",
    },
  ];

  return (
    <section id="experience" className="bg-background py-16">
      <div className="container">
        <h2 className="section-heading">Where I've Worked</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/20 hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Timeline dot */}
                <div 
                  className={`absolute -left-[34px] top-0 w-16 h-16 rounded-full ${exp.bgColor} 
                    hidden md:flex items-center justify-center shadow-lg transform 
                    transition-all duration-300 group-hover:scale-110`}
                >
                  {exp.icon}
                </div>
                
                <div 
                  className={`border rounded-xl shadow-md 
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-2 
                  md:ml-16 relative overflow-hidden 
                  ${exp.accentColor} border-transparent`}
                >
                  <div 
                    className="bg-card border border-border rounded-xl p-6 relative z-10"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 p-2 bg-white rounded-lg shadow-md flex items-center justify-center">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="object-contain max-w-full max-h-full"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {exp.date}
                      </div>
                    </div>
                    
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start"
                        >
                          <span className={`mr-3 mt-1 ${exp.textColor} font-bold`}>
                            ▹
                          </span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
