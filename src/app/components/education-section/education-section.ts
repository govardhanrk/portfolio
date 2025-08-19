import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  university: string;
  logo: string;
  date: string;
  description: string;
  achievements: string[];
  bgColor: string;
  accentColor: string;
  textColor: string;
}

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education-section.html',
  styleUrl: './education-section.scss'
})
export class EducationSectionComponent {
  education: Education[] = [
    {
      degree: "Master of Science in Computer Science",
      university: "University of Missouri, Columbia, USA",
      logo: "/images/company-logos/mizzou.png",
      date: "May 2025",
      description:
        "GPA: 3.89/4.00. Coursework: Big Data Analytics, Cloud Computing, Machine Learning, Neural Networks, Computer Vision, DSA-II.",
      achievements: [
        "Recognized as Outstanding Master's Student (2025) by EECS department at University of Missouri-Columbia",
        "Led budget management and reporting as a Treasurer at University Fighting World Hunger (UFWH)",
        "Assisted with multiple events like career fairs and resume reviews as a Volunteer at EECS Graduate Student Association",
        "Secured 2nd Prize at MUIDSI Hackathon 2025 for Vision-AI project, an emergency assistance tool for the visually impaired",
      ],
      bgColor: "bg-blue-600",
      accentColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      degree: "Bachelor of Engineering in Information Technology",
      university: "Sant Gadge Baba Amravati University, India",
      logo: "/images/company-logos/amravatiuni.png",
      date: "June 2019",
      description:
        "GPA: 7.57/10. Comprehensive study of information technology, software development, and system design.",
      achievements: [
        "Member of the Institution of Electronics and Telecommunication Engineers: Ref. No. ISFC190",
        "Student Coordinator of technical events organized as part of annual fest ESPERANZA",
      ],
      bgColor: "bg-green-600",
      accentColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      degree: "Diploma in Computer Engineering",
      university: "Maharashtra State Board of Technical Education (MSBTE), India",
      logo: "/images/company-logos/MSBTE.png",
      date: "June 2016",
      description:
        "Focused study of computer engineering fundamentals and practical applications.",
      achievements: [],
      bgColor: "bg-purple-600",
      accentColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
  ];
}
