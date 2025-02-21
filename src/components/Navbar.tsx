export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">SB</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-zinc-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#work" className="text-zinc-400 hover:text-white transition-colors">
              Work
            </a>
            <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">
              Contact 💌
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 