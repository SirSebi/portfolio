"use client"

import { TechnologyCard } from "@/components/ui/technology-card"
import { TechStackIcon } from "@/components/icons/TechStackIcons"
import { BlurFade } from "./ui/blur-fade"

const technologies = [
  {
    name: "React",
    description: "JavaScript Library",
    icon: () => <TechStackIcon name="react" size="xl" />,
  },
  {
    name: "TypeScript",
    description: "JavaScript but better",
    icon: () => <TechStackIcon name="typescript" size="xl" />,
  },
  {
    name: "Angular",
    description: "JavaScript Framework",
    icon: () => <TechStackIcon name="angular" size="xl" />,
  },
  {
    name: "NextJS",
    description: "React framework",
    icon: () => <TechStackIcon name="nextjs" size="xl" />,
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    icon: () => <TechStackIcon name="tailwindcss" size="xl" />,
  },
  {
    name: "Git",
    description: "Version control",
    icon: () => <TechStackIcon name="git" size="xl" />,
  },
  {
    name: "Vercel",
    description: "Frontend Hosting",
    icon: () => <TechStackIcon name="vercel" size="xl" />,
  },
  {
    name: "Docker",
    description: "Container Platform",
    icon: () => <TechStackIcon name="docker" size="xl" />,
  },
]

export function Technologies() {
  return (
    <section id="technologies" aria-label="Technologies">
      <div className="w-full bg-zinc-950 px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
        <BlurFade delay={0.25} inView>
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">Current technologies</h2>
          <p className="text-zinc-400 mb-8">
            I&apos;m proficient in a range of modern technologies that empower me to build highly functional solutions. These
            are some of my main technologies.
          </p>
          </BlurFade>
          <BlurFade delay={0.25*2} inView>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.name}
                  className="relative bg-zinc-900/40 hover:bg-black/40 backdrop-blur-sm border-zinc-800/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2" aria-hidden="true">
                      <tech.icon />
                    </div>
                    <div className="pt-4">
                      <h3 className="font-medium text-white">{tech.name}</h3>
                      <p className="text-sm text-zinc-400">{tech.description}</p>
                    </div>
                  </div>
                </TechnologyCard>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}

export default Technologies;

