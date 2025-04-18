import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      University: "University of Missouri, Columbia, USA",
      logo: "/images/company-logos/mizzou.png",
      date: "Expected May 2025",
      description:
        "Pursuing advanced studies in computer science with focus on data systems and cloud computing.",
      achievements: [
        "Treasurer, University Fighting World Hunger (UFWH)",
        "Volunteer, Electrical Engineering and Computer Science Graduate Student Association",
        "Specializing in data engineering and cloud technologies",
      ],
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      bgColor: "bg-blue-600",
      accentColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      degree: "Bachelor of Engineering in Information Technology",
      University: "Sant Gadge Baba Amravati University, India",
      logo: "/images/company-logos/amravatiuni.png",
      date: "June 2019",
      description:
        "Comprehensive study of information technology, software development, and system design.",
      achievements: [
        "Strong foundation in programming languages and software development",
        "Practical experience in database management and system architecture",
        "Project work in data analysis and web development",
      ],
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      bgColor: "bg-green-600",
      accentColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      degree: "Diploma in Computer Engineering",
      University: "Maharashtra State Board of Technical Education (MSBTE), India",
      logo: "/images/company-logos/MSBTE.png",
      date: "June 2016",
      description:
        "Focused study of computer engineering fundamentals and practical applications.",
      achievements: [
        "Developed strong foundation in computer hardware and software",
        "Hands-on experience with computer networks and system administration",
        "Completed projects in computer architecture and digital electronics",
      ],
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      bgColor: "bg-purple-600",
      accentColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
  ];

  return (
    <section id="education" className="bg-background py-16">
      <div className="container">
        <h2 className="section-heading">Education</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/20 hidden md:block" />
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Timeline dot */}
                <div 
                  className={`absolute -left-[34px] top-0 w-16 h-16 rounded-full ${edu.bgColor} 
                    hidden md:flex items-center justify-center shadow-lg transform 
                    transition-all duration-300 group-hover:scale-110`}
                >
                  {edu.icon}
                </div>
                
                <div 
                  className={`border rounded-xl shadow-md 
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-2 
                  md:ml-16 relative overflow-hidden 
                  ${edu.accentColor} border-transparent`}
                >
                  <div 
                    className="bg-card border border-border rounded-xl p-6 relative z-10"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 p-2 bg-white rounded-lg shadow-md flex items-center justify-center">
                          <img
                            src={edu.logo}
                            alt={`${edu.University} logo`}
                            className="object-contain max-w-full max-h-full"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {edu.University}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {edu.date}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Achievements and Activities:
                      </h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        {edu.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start"
                          >
                            <span className={`mr-3 mt-1 ${edu.textColor} font-bold`}>
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
      </div>
    </section>
  );
};

export default EducationSection;
