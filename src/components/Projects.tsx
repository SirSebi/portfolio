import ProjectCard from "./ui/project-card";

export default function Projects() {
    return ( 
        <section id="projects">
            <div className="w-full bg-zinc-950 px-4 py-12 md:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl py-20">
                    <h2 className="text-4xl font-bold tracking-tight text-white mb-4">Personal Projects</h2>
                    <p className="text-zinc-400 mb-8">
                    I&apos;m proficient in a range of modern technologies that empower me to build highly functional solutions. These
                    are some of my main technologies.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <ProjectCard
                            title="Personal Portfolio"
                            description="My personal website showcasing my projects and skills as a developer."
                            imageUrl="/projects/portfolio.png"
                            url="https://sebastianbrandes.dev"
                            technologies={[{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }]}
                        />

                        <ProjectCard
                            title="Commercial Website"
                            description="A simple and clean website for a commercial cleaning company."
                            imageUrl="/projects/gebaeudereinigung-puetz.png"
                            url="https://gebaeudereinigung-puetz.de"
                            technologies={[{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }]}
                        />

                        <ProjectCard
                            title="DnD Compendium"
                            description="A Dungeons and Dragons compendium for the DnD 5th edition for private use."
                            imageUrl="/projects/dnd-compendium.png"
                            url="DnD Compendium"
                            technologies={[{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Supabase" }]}
                        />

                        <ProjectCard
                            title="Management System"
                            description="First ever project I did. A simple management system for an ingame tattoo studio."
                            imageUrl="/projects/northern-ink.png"
                            url="Northern Ink"
                            technologies={[{ name: "JavaScript" }, { name: "PHP" }, { name: "CSS" }, { name: "AJAX" }, { name: "MYSQL" }]}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}