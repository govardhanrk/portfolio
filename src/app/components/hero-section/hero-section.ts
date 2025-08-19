import { Component, OnInit, OnDestroy, HostListener, PLATFORM_ID, Inject, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  scrollProgress = 0;
  titles = ['Software Engineer', 'Data Engineer', 'Software Developer', 'Data Scientist'];
  currentTitleIndex = 0;
  displayText = '';
  isErasing = false;
  isTyping = false;
  private typewriterTimeout: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const scrollPosition = window.scrollY;
    const maxScroll = 300; // Adjust this value to control how quickly the transition happens
    const progress = Math.min(scrollPosition / maxScroll, 1);
    this.scrollProgress = progress;
  }

  // Calculate transform values based on scroll progress
  get scale() {
    return 1 - (this.scrollProgress * 0.7); // Scale from 1 to 0.3
  }

  get translateY() {
    return this.scrollProgress * -100; // Move up by 100px
  }

  get translateX() {
    return this.scrollProgress * 100; // Move right by 100px
  }

  get opacity() {
    return 1 - this.scrollProgress;
  }

  get heroTitleTransform() {
    return `scale(${this.scale}) translate(${this.translateX}px, ${this.translateY}px)`;
  }

  private startTypewriter() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    this.typeText();
  }

  private typeText() {
    const currentTitle = this.titles[this.currentTitleIndex];
    
    if (!this.isErasing) {
      // Typing phase
      if (this.displayText.length < currentTitle.length) {
        this.displayText = currentTitle.substring(0, this.displayText.length + 1);
        this.cdr.detectChanges(); // Force change detection
        this.typewriterTimeout = setTimeout(() => this.typeText(), 100); // Typing speed
      } else {
        // Finished typing, wait before erasing
        this.typewriterTimeout = setTimeout(() => {
          this.isErasing = true;
          this.typeText();
        }, 2000); // Pause after typing
      }
    } else {
      // Erasing phase
      if (this.displayText.length > 0) {
        this.displayText = this.displayText.substring(0, this.displayText.length - 1);
        this.cdr.detectChanges(); // Force change detection
        this.typewriterTimeout = setTimeout(() => this.typeText(), 50); // Erasing speed (faster)
      } else {
        // Finished erasing, move to next title
        this.isErasing = false;
        this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
        this.typewriterTimeout = setTimeout(() => this.typeText(), 500); // Pause before typing new word
      }
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.onWindowScroll();
      this.startTypewriter();
    }
  }

  ngOnDestroy() {
    if (this.typewriterTimeout) {
      clearTimeout(this.typewriterTimeout);
    }
  }
}
