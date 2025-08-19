import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsSectionComponent } from '../../components/projects-section/projects-section';
import { BackToHomeComponent } from '../../components/back-to-home/back-to-home';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    ProjectsSectionComponent,
    BackToHomeComponent
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projectCategories = ["all", "featured", "data", "backend"];
  currentFilter = "all";

  selectFilter(category: string) {
    this.currentFilter = category;
  }

  formatCategoryName(category: string): string {
    switch(category) {
      case 'all': return 'All';
      case 'featured': return 'Featured';
      case 'data': return 'Data';
      case 'backend': return 'Backend';
      default: return category.charAt(0).toUpperCase() + category.slice(1);
    }
  }

  getCategoryIcon(category: string): string {
    switch(category) {
      case 'all': return 'fas fa-th-large';
      case 'featured': return 'fas fa-star';
      case 'data': return 'fas fa-database';
      case 'backend': return 'fas fa-server';
      default: return 'fas fa-code';
    }
  }
}
