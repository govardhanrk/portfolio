import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isErasing, setIsErasing] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('hero');
      
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const progress = Math.min(scrollPosition / (heroHeight / 2), 1);
        setScrollProgress(progress);

        // Manage typing and erasing states
        if (progress > 0.4 && !isTyping) {
          setIsTyping(true);
          setIsErasing(false);
        } else if (progress <= 0.4 && isTyping) {
          setIsTyping(false);
          setIsErasing(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTyping]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollProgress > 0
          ? "bg-background bg-opacity-90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold text-foreground relative flex items-center">
          <div className="flex items-center">
            <span className="text-portfolio-accent flex items-center">
              <span className="flex items-center relative">
                <span className={`${scrollProgress <= 0.4 ? 'group-hover:text-portfolio-accent' : 'text-portfolio-accent'}`}>
                  {"$"}
                </span>
                {scrollProgress <= 0.4 && (
                  <span className="ml-[2px]">{""}</span>
                )}
                {(isTyping || isErasing) && (
                  <div 
                    className={`${styles.typingContainer} ml-[2px] visible`}
                  >
                    <span 
                      className={`${styles.typingAnimation} ${
                        isTyping ? styles.typing : styles.erasing
                      } text-portfolio-accent`}
                    >
                      govardhan_khadakkar
                    </span>
                    <span 
                      className={`${styles.cursor} ${
                        isTyping ? styles.cursorTyping : styles.cursorErasing
                      } text-portfolio-accent`}
                    >
                      _
                    </span>
                  </div>
                )}
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-item link-underline px-3 py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-foreground focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 bg-background shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} aria-label="Close menu">
            <X size={24} className="text-foreground" />
          </button>
        </div>
        <div className="flex flex-col items-center p-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg text-foreground hover:text-portfolio-accent transition-colors duration-300"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden backdrop-blur-sm"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
