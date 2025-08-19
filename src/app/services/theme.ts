import { Injectable, signal, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.initializeTheme();
  }

  get isDark() {
    return this.isDarkMode();
  }

  private initializeTheme() {
    if (isPlatformBrowser(this.platformId)) {
      // Check if user has a saved preference
      const savedTheme = localStorage.getItem('theme');
      
      if (savedTheme) {
        this.isDarkMode.set(savedTheme === 'dark');
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDarkMode.set(prefersDark);
      }
      
      this.updateTheme();
    }
  }

  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());
    this.updateTheme();
    
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
    }
  }

  private updateTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const htmlElement = document.documentElement;
      
      if (this.isDarkMode()) {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    }
  }
}
