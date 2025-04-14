import React from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      University: "University of Missouri, Columbia, USA",
      date: "Expected May 2025",
      description:
        "Pursuing advanced studies in computer science with focus on data systems and cloud computing.",
      achievements: [
        "Treasurer, University Fighting World Hunger (UFWH)",
        "Volunteer, Electrical Engineering and Computer Science Graduate Student Association",
        "Specializing in data engineering and cloud technologies",
      ],
      icon: <GraduationCap className="w-5 h-5 text-portfolio-accent" />,
    },
    {
      degree: "Bachelor of Engineering in Information Technology",
      University: "Sant Gadge Baba Amravati University, India",
      date: "June 2019",
      description:
        "Comprehensive study of information technology, software development, and system design.",
      achievements: [
        "Strong foundation in programming languages and software development",
        "Practical experience in database management and system architecture",
        "Project work in data analysis and web development",
      ],
      icon: <Award className="w-5 h-5 text-portfolio-accent" />,
    },
    {
      degree: "Diploma in Computer Engineering",
      University: "Maharashtra State Board of Technical Education (MSBTE), India",
      date: "June 2016",
      description:
        "Focused study of computer engineering fundamentals and practical applications.",
      achievements: [
        "Developed strong foundation in computer hardware and software",
        "Hands-on experience with computer networks and system administration",
        "Completed projects in computer architecture and digital electronics",
      ],
      icon: <Award className="w-5 h-5 text-portfolio-accent" />,
    },
  ];

  return (
    <section id="education" className="bg-background">
      <div className="container">
        <h2 className="section-heading">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="bg-muted p-3 rounded-full">
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-lg font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.date}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-base">
                    {edu.University}
                  </p>
                  <p className="mt-2 text-muted-foreground text-sm">
                    {edu.description}
                  </p>
                  <div className="mt-3">
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      Achievements and Activities:
                    </h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-muted-foreground"
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
