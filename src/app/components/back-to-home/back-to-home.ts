import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-back-to-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="back-to-home-container">
      <a routerLink="/" class="back-to-home-btn" title="Back to Home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Back to Home</span>
      </a>
    </div>
  `,
  styleUrl: './back-to-home.scss'
})
export class BackToHomeComponent {}
