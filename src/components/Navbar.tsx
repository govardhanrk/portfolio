import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 600;
      const progress = Math.min(scrollPosition / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <a href="#hero" className="text-2xl font-bold text-foreground group relative">
          <span className="text-portfolio-accent transition-all duration-300">{"<"}</span>
          <span 
            className="group-hover:text-portfolio-accent transition-all duration-300"
            style={{
              opacity: scrollProgress > 0.4 ? scrollProgress : 0,
              transform: `scale(${0.3 + (scrollProgress * 0.7)})`,
              transformOrigin: 'left center',
              transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
            }}
          >
            Govardhan Khadakkar
          </span>
          <span className="text-portfolio-accent transition-all duration-300">{"/"}</span>
          <span className="text-portfolio-accent transition-all duration-300">{">"}</span>
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
