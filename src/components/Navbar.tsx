'use client'

import SimpleContactButton from "./ui/popover-button";
import { ShinyButton } from "./ui/shiny-button";
import Link from "next/link";

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
            <Link href="/" className="text-xl font-bold text-white" aria-label="Sebastian Brandes">SB</Link>
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