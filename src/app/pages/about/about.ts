import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSectionComponent } from '../../components/about-section/about-section';
import { SkillsSectionComponent } from '../../components/skills-section/skills-section';
import { BeyondTechComponent } from '../../components/beyond-tech/beyond-tech';
import { BackToHomeComponent } from '../../components/back-to-home/back-to-home';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    AboutSectionComponent,
    SkillsSectionComponent,
    BeyondTechComponent,
    BackToHomeComponent
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {}
