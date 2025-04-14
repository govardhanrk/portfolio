import React from "react";
import { Award, Calendar, CheckCircle, Medal, BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CertificationsSection = () => {
  const certifications = [
    {
      name: "Foundational C# with Microsoft",
      issuer: "Microsoft",
      date: "April 2025",
      credentialId: "fcc729aaf0d-c6ad-4a18-98ce-77f6756daab0-fcswm",
      description: "Comprehensive understanding of C# programming fundamentals and Microsoft development tools.",
      icon: <Medal className="w-6 h-6 text-portfolio-accent" />,
    },
    {
      name: "ETL in Python and SQL",
      issuer: "LinkedIn",
      date: "March 2025",
      credentialId: "LinkedIn-ETL",
      description: "Expertise in Extract, Transform, Load (ETL) processes using Python and SQL for data engineering.",
      icon: <BadgeCheck className="w-6 h-6 text-portfolio-accent" />,
    },
    {
      name: "Intro to Deep Learning",
      issuer: "Kaggle",
      date: "March 2025",
      credentialId: "Kaggle-DL",
      description: "Foundational knowledge in deep learning and data classification techniques.",
      icon: <Award className="w-6 h-6 text-portfolio-accent" />,
    },
  ];

  return (
    <section id="certifications" className="bg-background py-24">
      <div className="container">
        <h2 className="section-heading">Certifications</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Professional certifications that validate my expertise in various cloud platforms and technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="border border-border hover:border-portfolio-accent transition-all duration-300 bg-card shadow-sm hover:shadow-lg transform hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-muted p-3 rounded-full">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{cert.name}</h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    
                    <div className="flex items-center mt-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{cert.date}</span>
                    </div>
                    
                    <Separator className="my-3" />
                    
                    <div className="mt-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 mr-2 text-portfolio-accent" />
                        <span>Credential ID: {cert.credentialId}</span>
                      </div>
                      <p className="mt-2 text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
