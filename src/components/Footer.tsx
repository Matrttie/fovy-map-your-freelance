
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">FOVY</h3>
            <p className="text-sm text-muted-foreground">
              AI-driven career mapping for freelancers. Build confidence, clarity, and client communication.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-muted-foreground hover:text-foreground" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground" href="#">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-muted-foreground hover:text-foreground" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-muted-foreground hover:text-foreground" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground" href="#">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FOVY. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-4 md:mt-0">
            Designed with precision. Built with care.
          </p>
        </div>
      </div>
    </footer>
  );
};
