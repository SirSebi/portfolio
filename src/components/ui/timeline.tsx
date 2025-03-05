"use client"

import type React from "react"
import { useEffect, useRef, useState, memo } from "react"
import { useSpring, animated } from "@react-spring/web"
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
  const [height, setHeight] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  const springs = useSpring({
    from: { height: 0, opacity: 0 },
    to: {
      height: height * scrollProgress,
      opacity: scrollProgress > 0.1 ? 1 : 0,
    },
    config: {
      tension: 170,
      friction: 26,
    },
  })

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate progress based on viewport position
      const start = windowHeight * 0.1 // 10% from top
      const end = windowHeight * 0.5 // 50% from top
      const total = end - start

      const elementTop = rect.top
      const elementBottom = rect.bottom

      let progress = 0

      if (elementTop <= start) {
        if (elementBottom <= end) {
          progress = 1
        } else {
          progress = Math.min(Math.max((start - elementTop) / total, 0), 1)
        }
      }

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
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
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <animated.div
            style={{
              ...springs,
              width: "2px",
              position: "absolute",
              insetInline: 0,
              top: 0,
              background: "linear-gradient(to top, rgb(168, 85, 247) 0%, rgb(59, 130, 246) 50%, transparent 100%)",
              backgroundSize: "100% 200%",
              backgroundPosition: `0% ${100 - scrollProgress * 100}%`,
              borderRadius: "9999px",
            }}
          />
        </div>
      </div>
    </div>
  )
})

Timeline.displayName = "Timeline"

