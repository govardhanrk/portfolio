import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Interest {
  name: string;
  description: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-beyond-tech',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beyond-tech.html',
  styleUrl: './beyond-tech.scss'
})
export class BeyondTechComponent {
  interests: Interest[] = [
    {
      name: "Strategic Gaming",
      description: "Passionate about competitive team-based games that require strategic thinking, quick decision-making, and effective communication.",
      icon: "/images/icons/fight.png",
      skills: ["Team Collaboration", "Strategic Planning", "Quick Decision Making", "Communication", "Adaptability"]
    },
    {
      name: "Swimming",
      description: "Enjoy swimming as a way to stay active and maintain work-life balance. It's a great way to clear the mind and stay healthy.",
      icon: "/images/icons/Training.png",
      skills: ["Discipline", "Work-Life Balance", "Physical Wellness", "Mental Clarity", "Consistency"]
    }
  ];

  gamingDetails = {
    games: ["Valorant", "Rocket League", "PUBG PC"],
    highlights: [
      "Team player with strong communication skills",
      "Strategic thinking and tactical planning",
      "Quick adaptation to changing situations",
      "Leadership in team coordination"
    ]
  };
}
