import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Emoji } from "@/components/ui/emoji";
import { GridPattern } from './ui/grid-pattern';
import { BlurFade } from './ui/blur-fade';

export default function Hero() {
  return (
    <section id="hero" aria-label="Hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Grid Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
      </div>

      {/* Content */}
      <div className="relative text-center max-w-3xl mx-auto px-4 z-10">
      <BlurFade delay={0.25} inView>
        <div className="relative w-32 h-32 mx-auto mb-8 group cursor-pointer translate-x-[-20px] translate-y-[+8px]">
          <Image
            src="/default-memoji.png" 
            alt="Sebastian Brandes Portrait Memoji"
            width={128}
            height={128}
            className="absolute top-0 left-0 transition-all duration-300 ease-in-out group-hover:opacity-0"
            style={{ backfaceVisibility: 'hidden' }}
            priority
          />
          <Image
            src="/hover-memoji.png"
            alt="Sebastian Memoji Winking"
            width={128}
            height={128}
            className="absolute top-0 left-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
            style={{ backfaceVisibility: 'hidden' }}
            priority
          />
        </div>
        </BlurFade>
        <BlurFade delay={0.25*2} inView>
          <h1 className="text-6xl font-bold tracking-tighter text-white mb-4">
            Hey, I&apos;m Sebastian <span className="inline-block transition-all duration-300 ease-in-out hover:rotate-[15deg]">
              <Emoji symbol="👋" offset={{ x: "2px", y: "-1px" }} />
            </span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.25*4} inView>
          <p className="text-zinc-400 hover:text-white transition-colors group cursor-default">
          <span className="inline-block transition-all duration-300 ease-in-out group-hover:translate-y-[-4px]">
            <Emoji symbol="📍" />
          </span>
           Aschaffenburg, Germany 
          </p>
        </BlurFade>
        
        <BlurFade delay={0.25*6} inView>
        <h2 className="text-2xl text-zinc-400 mt-6">
          Web Developer crafting digital experiences <span className="inline-block transition-all duration-300 ease-in-out hover:translate-y-[-4px]">
            <Emoji symbol="✨" />
          </span>
        </h2>
        </BlurFade>

      </div>
    </section>
  );
} 