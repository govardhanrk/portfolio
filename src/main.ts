import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';

// Ensure zone.js is loaded
import 'zone.js';

// Import AOS
import * as AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 100
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
