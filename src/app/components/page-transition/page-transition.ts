import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-page-transition',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-transition-container">
      <router-outlet></router-outlet>
    </div>
  `,
  animations: [
    trigger('pageTransition', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ], { optional: true }),
        query(':leave', [
          animate('0.3s ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
        ], { optional: true })
      ])
    ])
  ],
  styleUrl: './page-transition.scss'
})
export class PageTransitionComponent {}
