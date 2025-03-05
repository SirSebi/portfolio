"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface Technology {
  name: string
  color?: string
}

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  technologies: Technology[]
  url?: string
  onClick?: () => void
}

export default function ProjectCard({ title, description, imageUrl, technologies, url, onClick }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <Card 
      className="overflow-hidden transition-all hover:shadow-lg border-[#333333] bg-[#1a1a1a] cursor-pointer" 
      onClick={onClick}
    >
      {/* Mac Browser Header */}
      <div className="bg-[#1a1a1a] px-4 py-2 flex items-center border-b border-[#333333]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        {url && (
          url.startsWith('https') ? (
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-4 flex-1 px-3 py-1 bg-[#222222] text-xs text-gray-400 rounded-md truncate hover:text-gray-300 cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              {url}
            </a>
          ) : (
            <div className="ml-4 flex-1 px-3 py-1 bg-[#222222] text-xs text-gray-400 rounded-md truncate">
              {url}
            </div>
          )
        )}
      </div>

      {/* Screenshot Area */}
      <div className="relative w-full h-40 bg-[#0a0a0a]">
        {!imageError ? (
          <Image
            src={imageUrl || "/placeholder.svg?height=192&width=384"}
            alt={title}
            fill
            className="object-cover"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">Image not available</div>
        )}
      </div>

      {/* Content Area */}
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
            key={index}
            variant="outline"
            className="bg-[#222222] text-gray-300 border-[#333333] hover:bg-[#2a2a2a]"
          >
            {tech.name}
          </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

