import Image from 'next/image';
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "absolute inset-x-0 inset-y-[-50%] h-[200%] skew-y-12",
          )}
        />
      </div>

      {/* Content */}
      <div className="relative text-center max-w-3xl mx-auto px-4 z-10">
        <div className="relative w-32 h-32 mx-auto mb-8 group cursor-pointer">
          <Image
            src="/default-memoji.png" 
            alt="Sebastian Memoji"
            width={128}
            height={128}
            className="absolute top-0 left-0 transition-all duration-300 ease-in-out group-hover:opacity-0"
            style={{ backfaceVisibility: 'hidden' }}
          />
          <Image
            src="/hover-memoji.png"
            alt="Sebastian Memoji Winking"
            width={128}
            height={128}
            className="absolute top-0 left-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
            style={{ backfaceVisibility: 'hidden' }}
          />
        </div>
        <h1 className="text-6xl font-bold tracking-tighter text-white mb-4">
          Hey, I&apos;m Sebastian <span className="inline-block transition-all duration-300 ease-in-out hover:rotate-[15deg]">👋</span>
        </h1>
        <p className="text-2xl text-zinc-400 mt-6">
          Web Developer crafting digital experiences <span className="inline-block transition-all duration-300 ease-in-out hover:translate-y-[-4px]">✨</span>
        </p>
        <div className="mt-12 flex items-center justify-center gap-x-6">
          <a href="#contact" className="text-zinc-400 hover:text-white transition-colors group">
            Let&apos;s work together <span className="inline-block transition-all duration-300 ease-in-out group-hover:translate-y-[-4px] group-hover:rotate-[12deg]">🚀</span>
          </a>
        </div>
      </div>
    </div>
  );
} 