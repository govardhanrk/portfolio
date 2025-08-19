import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  skills: string[];
  logo: string;
  bgColor: string;
  accentColor: string;
}

@Component({
  selector: 'app-certifications-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications-section.html',
  styleUrl: './certifications-section.scss'
})
export class CertificationsSectionComponent implements OnInit {
  certifications: Certification[] = [
    {
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "Jul 2025 - Jul 2028",
      credentialId: "70628272-1bd6-4b48-8b3b-cf1e3a195fff",
      verificationUrl: "https://www.credly.com/earner/earned/badge/70628272-1bd6-4b48-8b3b-cf1e3a195fff",
      skills: ["Amazon Web Services (AWS)", "Cloud Architecture", "Solutions Design", "AWS Services"],
      logo: "/images/company-logos/aws.png",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
      accentColor: "bg-orange-50"
    },
    {
      title: "Microsoft Certified: Fabric Data Engineer Associate",
      issuer: "Microsoft",
      date: "May 2025 - May 2026",
      credentialId: "64FFF9BCBD22B778",
      verificationUrl: "https://learn.microsoft.com/api/credentials/share/en-us/GovardhanKhadakkar/64FFF9BCBD22B778?sharingId=E3F6EA6937EA15A5",
      skills: ["Azure Service Fabric", "Data Engineering", "Microsoft Azure", "Azure DevOps Services", "Azure Data Lake", "Transact-SQL (T-SQL)", "Kusto Query Language (KQL)", "Data Ingestion", "Data Transformation", "Continuous Integration and Continuous Delivery (CI/CD)", "Extract, Transform, Load (ETL)", "Apache Spark"],
      logo: "/images/company-logos/microsoft.png",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      accentColor: "bg-blue-50"
    },
    {
      title: "Foundational C# with Microsoft",
      issuer: "Microsoft",
      date: "Apr 2025",
      credentialId: "fcc729aaf0d-c6ad-4a18-98ce-77f6756daab0-fcswm",
      skills: ["C#", ".NET Development", "Object-Oriented Programming", "Microsoft Technologies"],
      logo: "/images/company-logos/microsoft.png",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      accentColor: "bg-purple-50"
    },
    {
      title: "ETL in Python and SQL",
      issuer: "LinkedIn",
      date: "Mar 2025",
      skills: ["Extract, Transform, Load (ETL)", "SQL", "Python (Programming Language)", "Data Processing"],
      logo: "/images/company-logos/linkedin.png",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-700",
      accentColor: "bg-blue-50"
    },
    {
      title: "Intro to Deep Learning",
      issuer: "Kaggle",
      date: "Mar 2025",
      skills: ["Deep Learning", "Data Classification", "Machine Learning", "Neural Networks"],
      logo: "/images/company-logos/kaggle.png",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600",
      accentColor: "bg-green-50"
    }
  ];

  ngOnInit() {
    // Debug: Log certification URLs to console
    this.certifications.forEach((cert, index) => {
      if (cert.verificationUrl) {
        console.log(`Certification ${index + 1} (${cert.title}): ${cert.verificationUrl}`);
      }
    });
  }

  // Method to handle link clicks for debugging
  onVerificationClick(url: string, title: string) {
    console.log(`Clicking verification link for: ${title}`);
    console.log(`URL: ${url}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
