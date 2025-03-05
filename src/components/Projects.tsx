"use client"

import React, { useState } from "react";
import { BlurFade } from "./ui/blur-fade";
import ProjectCard from "./ui/project-card";
import { ProjectModal } from "./ui/project-modal";
import type { ProjectDetails } from "./ui/project-modal";
import projects, { getProjectById } from "@/data/projects";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProjectClick = (projectId: string) => {
        const project = getProjectById(projectId);
        if (project) {
            setSelectedProject(project);
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return ( 
        <section id="projects" aria-label="Projects">
            <div className="w-full bg-zinc-950 px-4 py-12 md:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl py-20">
                    <BlurFade delay={0.25} inView>
                    <h2 className="text-4xl font-bold tracking-tight text-white mb-4">Personal Projects</h2>
                    <p className="text-zinc-400 mb-8">
                    I leverage a variety of modern technologies to develop high-performance and user-friendly solutions. Here are some of the key technologies used in my projects.
                    </p>
                    </BlurFade>
                    <BlurFade delay={0.25*2} inView>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {projects.map((project) => (
                            <article key={project.id} className="h-full">
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    imageUrl={project.images[0]?.src || "/placeholder.svg"}
                                    url={project.liveUrl || project.title}
                                    technologies={project.technologies.map(tech => ({ name: tech }))}
                                    onClick={() => handleProjectClick(project.id)}
                                />
                            </article>
                        ))}
                    </div>
                    </BlurFade>
                </div>
            </div>

            <ProjectModal 
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    )
}