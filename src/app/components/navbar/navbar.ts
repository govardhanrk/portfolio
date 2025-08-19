import { Component, OnInit, OnDestroy, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ThemeToggleComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  scrollProgress = 0;
  isTyping = false;
  isErasing = false;

  navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const scrollPosition = window.scrollY;
    const heroSection = document.getElementById('hero');
    
    if (heroSection) {
      // Home page - use hero section for progress
      const heroHeight = heroSection.offsetHeight;
      const progress = Math.min(scrollPosition / (heroHeight / 2), 1);
      this.scrollProgress = progress;

      // Manage typing and erasing states
      if (progress > 0.4 && !this.isTyping) {
        this.isTyping = true;
        this.isErasing = false;
      } else if (progress <= 0.4 && this.isTyping) {
        this.isTyping = false;
        this.isErasing = true;
      }
    } else {
      // Other pages - use viewport height for progress
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - viewportHeight;
      
      if (maxScroll > 0) {
        this.scrollProgress = Math.min(scrollPosition / maxScroll, 1);
      } else {
        this.scrollProgress = 0;
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.onWindowScroll();
      
      // Reset scroll progress on navigation
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          this.scrollProgress = 0;
        });
    }
  }

  ngOnDestroy() {
    // HostListener automatically cleans up
  }
}
