"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export type ProjectImage = {
  src: string
  alt: string
}

export type ProjectDetails = {
  id: string
  title: string
  description: string
  longDescription: string
  images: ProjectImage[]
  technologies: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
  year: string
}

interface ProjectModalProps {
  project: ProjectDetails | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Reset image index when project changes
  useEffect(() => {
    if (project) {
      setCurrentImageIndex(0)
    }
  }, [project])

  if (!project) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto p-0 bg-[#1a1a1a] border-[#333333]">
        <div className="sticky top-0 z-10 bg-[#1a1a1a] border-[#333333]">
          {/* Mac-style header with traffic light buttons */}
          <div className="flex items-center gap-2 px-3 py-2 border-b bg-[#1a1a1a] border-[#333333]">
            <button
              onClick={onClose}
              className="h-3 w-3 rounded-full bg-red-500 relative group"
            >
              <span className="absolute inset-0 flex items-center justify-center text-[8px] text-red-800 opacity-0 group-hover:opacity-100 font-bold">
              &#x2715;
              </span>
            </button>
            <div
              className="h-3 w-3 rounded-full bg-yellow-500 relative"
            />
            <div
              className="h-3 w-3 rounded-full bg-green-500 relative"
            />

            {/* URL/Domain bar */}
            <div className="ml-4 flex-1 flex items-center">
              <div className="bg-[#222222] rounded-md py-1 px-3 text-xs text-muted-foreground w-full max-w-md mx-auto flex items-center justify-center">
                <span className="truncate">{project.title}</span>
              </div>
            </div>
          </div>

          {/* Project title and description */}
          <div className="p-6 pb-2">
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground mt-1">{project.description}</DialogDescription>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="relative aspect-video bg-[#0a0a0a] mb-4">
          {project.images.length > 0 && (
            <Image
              src={project.images[currentImageIndex].src || "/placeholder.svg"}
              alt={project.images[currentImageIndex].alt}
              fill
              className="object-contain"
            />
          )}

          {project.images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 rounded-full h-10 w-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 rounded-full h-10 w-10"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {project.images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === currentImageIndex ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Project Details */}
        <div className="px-6 pb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge 
              key={tech} 
              variant="secondary" 
              className="bg-[#222222] text-gray-300 border-[#333333] hover:bg-[#2a2a2a]"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Über das Projekt</h3>
              <p className="text-muted-foreground whitespace-pre-line">{project.longDescription}</p>

              {project.features.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Features</h3>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Projektdetails</h3>
                <div className="text-sm">
                  <div className="flex justify-between py-2 border-b border-[#333333]">
                    <span className="font-medium">Jahr</span>
                    <span className="text-muted-foreground">{project.year}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {project.liveUrl && (
                  <Button asChild variant="outline" className="w-full justify-start hover:bg-[#222222] bg-[#1a1a1a] border-[#333333]">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline" className="w-full justify-start hover:bg-[#222222] bg-[#1a1a1a] border-[#333333]">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

