import React from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "Python",
    "Java",
    "Scala",
    "SQL",
    "Apache Spark",
    "Kafka",
    "Spring Boot",
    "FastAPI",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Snowflake",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Databricks",
    "Qlik",
    "Machine Learning",
    "Data Warehousing"
  ];

  return (
    <section id="about" className="bg-white">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2 space-y-4 text-portfolio-light">
            <p>
              Hello! I'm Govardhan Khadakkar, a Software Engineer and Data Science enthusiast based in Columbia, Missouri.
              I specialize in data engineering, cloud solutions, and building scalable applications, with expertise in Python, Java, SQL,
              and big data technologies like Apache Spark, Kafka, and Databricks.
            </p>
            <p>
              I'm currently pursuing my Master of Science in Computer Science at the University of Missouri,
              Columbia, expected to graduate in May 2025. With over 5 years of professional experience,
              I've worked at leading companies like Tech Mahindra, LTIMINDTREE, and Siemens Healthineers,
              delivering impactful solutions in data engineering and cloud computing.
            </p>
            <p>
              My recent work at{" "}
              <a href="https://missouri.edu" className="text-portfolio-accent hover:underline">
                University of Missouri-Columbia
              </a>
              {" "}focuses on developing cloud-based data platforms and implementing machine learning solutions for research data analysis.
              I'm particularly interested in data warehousing, ETL optimization, and building scalable cloud infrastructure.
            </p>
            <p>Here are the key technologies I work with:</p>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center space-x-2 font-mono text-sm"
                >
                  <span className="text-portfolio-accent">▹</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <a href="/files/Govardhan Khadakkar Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary inline-block hover:btn-primary/80 text-black hover:text-white inline-flex items-center px-6 py-6 rounded transition-transform duration-300 hover:scale-105 bg-transparent">
                  <FileText size={18} />
                  Check out my Resume
                </Button>
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-64 h-64 mt-10 md:mt-0">
            <div className="absolute w-full h-full border-2 border-portfolio-accent rounded-md transform translate-x-5 translate-y-5" />
            <div className="absolute inset-0 bg-portfolio-navy/20 rounded-md z-10 hover:bg-transparent transition-colors duration-300" />
            <img
              src="/images/aboutprofile.jpg"
              alt="Govardhan Khadakkar"
              className="w-full h-full object-cover rounded-md relative z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
