import React, { useEffect, useState } from "react";
import { ArrowDownCircle } from "lucide-react";

const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 300; // Adjust this value to control how quickly the transition happens
      const progress = Math.min(scrollPosition / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate transform values based on scroll progress
  const scale = 1 - (scrollProgress * 0.7); // Scale from 1 to 0.3
  const translateY = scrollProgress * -100; // Move up by 100px
  const translateX = scrollProgress * 100; // Move right by 100px
  const opacity = 1 - scrollProgress;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div>
              <p className="text-portfolio-accent font-mono mb-5">
                Hello, my name is
              </p>
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-portfolio-navy mb-4 relative"
                style={{
                  transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
                  opacity: opacity,
                  transformOrigin: 'left top',
                  transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
                }}
              >
                Govardhan Khadakkar.
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-portfolio-light">
                I build scalable data systems.
              </h2>
            </div>
            <p className="text-lg text-portfolio-light max-w-xl">
              I'm a Software Engineer with 5+ years of experience specializing in building scalable data systems and applications. Currently, I'm focused on developing cloud-based data platforms at{" "}
              <a
                href="https://missouri.edu"
                className="text-portfolio-accent hover:underline"
              >
                University of Missouri-Columbia
              </a>
              .
            </p>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-portfolio-accent" />
              <div className="absolute inset-4 bg-portfolio-navy rounded-full overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="Govardhan Khadakkar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a 
            href="#about" 
            aria-label="Scroll down"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ArrowDownCircle className="text-portfolio-accent" size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
