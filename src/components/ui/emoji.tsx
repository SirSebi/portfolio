"use client"

import { useEffect, useRef } from "react"

interface EmojiProps {
  symbol: string
  size?: string
  className?: string
}

export function Emoji({ symbol, size = "1em", className = "" }: EmojiProps) {
  const spanRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (spanRef.current) {
      // Convert emoji to hex code points
      const hexCode = Array.from(symbol)
        .map((char) => char.codePointAt(0)?.toString(16).padStart(4, "0"))
        .filter(Boolean)
        .join("-")

      // Use Apple emoji CDN
      const emojiUrl = `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/${hexCode}.png`

      const img = new Image()
      img.crossOrigin = "anonymous"

      img.onload = () => {
        if (spanRef.current) {
          spanRef.current.style.backgroundImage = `url(${emojiUrl})`
          spanRef.current.style.backgroundSize = "contain"
          spanRef.current.style.backgroundRepeat = "no-repeat"
          spanRef.current.style.backgroundPosition = "center"
          spanRef.current.style.display = "inline-block"
          spanRef.current.style.width = size
          spanRef.current.style.height = size
          spanRef.current.style.verticalAlign = "middle"
          spanRef.current.textContent = ""
        }
      }

      img.onerror = () => {
        console.error(`Failed to load emoji: ${symbol}`)
        if (spanRef.current) {
          spanRef.current.textContent = symbol
          spanRef.current.style.fontSize = size
        }
      }

      img.src = emojiUrl
    }
  }, [symbol, size])

  return (
    <span
      ref={spanRef}
      className={className}
      style={{
        display: "inline-block",
        width: size,
        height: size,
      }}
    >
      {symbol}
    </span>
  )
} 