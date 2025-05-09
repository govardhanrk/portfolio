import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background py-10 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Govardhan Khadakkar. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/govardhanrk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-portfolio-accent transition-colors duration-300"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="www.linkedin.com/in/govardhan-khadakkar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-portfolio-accent transition-colors duration-300"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            {/* <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-light hover:text-portfolio-accent transition-colors duration-300"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a> */}
            <a
              href="mailto:khadakkargovardhan@gmail.com"
              className="text-muted-foreground hover:text-portfolio-accent transition-colors duration-300"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-portfolio-light">
          <p>
          Deployed to Vercel. Crafted with React, Tailwind CSS, and{" "}
            <span className="text-portfolio-accent">❤</span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
