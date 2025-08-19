import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceSectionComponent } from '../../components/experience-section/experience-section';
import { EducationSectionComponent } from '../../components/education-section/education-section';
import { CertificationsSectionComponent } from '../../components/certifications-section/certifications-section';
import { BackToHomeComponent } from '../../components/back-to-home/back-to-home';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    ExperienceSectionComponent,
    EducationSectionComponent,
    CertificationsSectionComponent,
    BackToHomeComponent
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  activeTab = 'experience';
}
