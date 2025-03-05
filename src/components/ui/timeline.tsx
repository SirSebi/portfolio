"use client"

import type React from "react"
import { useEffect, useRef, useState, memo } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { BlurFade } from "./blur-fade"

export interface TimelineEntry {
  title: string
  content: React.ReactNode
}

interface TimelineProps {
  data: TimelineEntry[]
}

export const Timeline = memo(({ data }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  // Verwende useScroll von framer-motion für bessere Scroll-Erkennung
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.1", "end 0.5"]
  })

  // Transformiere den Scroll-Fortschritt in Höhe
  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height]
  )

  // Transformiere den Scroll-Fortschritt in Opazität
  const progressOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0, 1, 1]
  )

  // Transformiere den Scroll-Fortschritt in eine Hintergrundposition
  const gradientPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 100%", "0% 0%"]
  )

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [])

  return (
    <div className="w-full bg-zinc-950 px-4 py-12 md:px-6 lg:px-8" ref={containerRef}>
      <div className="mx-auto max-w-6xl pt-20 pb-10">
        <BlurFade delay={0.25} inView>
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">My Journey</h2>
          <p className="text-zinc-400 mb-8">
            I&apos;ve been working as a developer for over 2 years now.
          </p>
        </BlurFade>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        
        {/* Hintergrund-Linie */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* Animierter Fortschrittsbalken */}
          <motion.div
            ref={progressBarRef}
            style={{
              height: progressHeight,
              opacity: progressOpacity,
              width: "4px", // Etwas breiter für bessere Sichtbarkeit
              position: "absolute",
              left: "-1px", // Zentrieren des breiteren Balkens
              top: 0,
              background: "linear-gradient(to top, rgb(168, 85, 247) 0%, rgb(59, 130, 246) 50%, transparent 100%)",
              backgroundSize: "100% 200%",
              backgroundPosition: gradientPosition,
              borderRadius: "9999px",
              boxShadow: "0 0 8px rgba(168, 85, 247, 0.5)", // Leuchten hinzufügen
            }}
          />
        </div>
      </div>
    </div>
  )
})

Timeline.displayName = "Timeline"

