import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';

// Ensure zone.js is loaded
import 'zone.js';

console.log('🚀 Starting Angular application...');

// Import AOS
import * as AOS from 'aos';
import 'aos/dist/aos.css';

console.log('📚 AOS imported successfully');

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 100
});

console.log('✨ AOS initialized');

console.log('🔧 Bootstrapping Angular application...');

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    console.log('✅ Angular application bootstrapped successfully');
  })
  .catch((err) => {
    console.error('❌ Error bootstrapping Angular application:', err);
  });
