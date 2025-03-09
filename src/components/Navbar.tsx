'use client'

import SimpleContactButton from "./ui/popover-button";
import { ShinyButton } from "./ui/shiny-button";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: "smooth"});
};

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <p onClick={() => scrollToSection("hero")}  className="text-xl font-bold text-white cursor-pointer" aria-label="Sebastian Brandes">SB</p>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <SimpleContactButton />
            <ShinyButton onClick={() => scrollToSection("projects")} aria-label="Scroll to my Projects">Projects</ShinyButton>
          </div>
        </div>
      </nav>
    </header>
  );
} 