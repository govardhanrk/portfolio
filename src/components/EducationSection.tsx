import React from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Missouri, Columbia, USA",
      date: "Expected May 2025",
      description:
        "Pursuing advanced studies in computer science with focus on data systems and cloud computing.",
      achievements: [
        "Treasurer, University Fighting World Hunger (UFWH)",
        "Volunteer, Electrical Engineering and Computer Science Graduate Student Association",
        "Specializing in data engineering and cloud technologies",
      ],
      icon: <GraduationCap className="w-6 h-6 text-portfolio-accent" />,
    },
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "Sant Gadge Baba Amravati University, India",
      date: "June 2019",
      description:
        "Comprehensive study of information technology, software development, and system design.",
      achievements: [
        "Strong foundation in programming languages and software development",
        "Practical experience in database management and system architecture",
        "Project work in data analysis and web development",
      ],
      icon: <Award className="w-6 h-6 text-portfolio-accent" />,
    },
  ];

  return (
    <section id="education" className="bg-white">
      <div className="container">
        <h2 className="section-heading">Education</h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start md:items-center flex-col md:flex-row gap-6">
                <div className="bg-gray-50 p-4 rounded-full">
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-portfolio-navy">
                    {edu.degree}
                  </h3>
                  <p className="text-portfolio-light text-lg">
                    {edu.institution}
                  </p>
                  <div className="flex items-center mt-2 text-sm text-portfolio-light">
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.date}
                  </div>
                  <p className="mt-3 text-portfolio-light">
                    {edu.description}
                  </p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-portfolio-navy mb-2">
                      Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-portfolio-light"
                        >
                          <span className="text-portfolio-accent mr-2 mt-1">
                            ▹
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
