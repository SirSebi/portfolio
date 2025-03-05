"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { Mail } from "lucide-react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

export default function SimpleContactButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [focusedInput, setFocusedInput] = useState<string | null>(null)
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null)
  const popoverRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Create portal container on mount
  useEffect(() => {
    if (typeof document !== 'undefined') {
      setPortalContainer(document.body)
    }
  }, [])

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        popoverRef.current && 
        !popoverRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    // Simulate sending - replace with your actual form submission logic
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSending(false)
    setIsSent(true)
    setName("")
    setEmail("")
    setMessage("")

    // Reset the "sent" state after 3 seconds
    setTimeout(() => {
      setIsSent(false)
      setIsOpen(false)
    }, 3000)
  }

  // Toggle popover
  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  // Get popover position
  const getPopoverPosition = useCallback(() => {
    if (!buttonRef.current) return { top: 0, right: 0 }
    
    const rect = buttonRef.current.getBoundingClientRect()
    return {
      top: rect.bottom + 8,
      right: window.innerWidth - rect.right
    }
  }, [])

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        className="inline-flex items-center justify-center gap-2 h-8 px-4 py-2 rounded-md text-sm font-medium transition-colors border border-black/20 hover:border-black/50 bg-white/80 hover:bg-white/60 text-black/90"
      >
        <Mail className="w-4 h-4" />
        CONTACT
      </button>

      {portalContainer && createPortal(
        <AnimatePresence>
          {isOpen && buttonRef.current && (
            <motion.div 
              ref={popoverRef}
              className="fixed z-50 w-80 p-4 rounded-md border border-zinc-800 bg-zinc-900/40 backdrop-blur-md shadow-lg"
              style={{
                top: `${getPopoverPosition().top}px`,
                right: `${getPopoverPosition().right}px`
              }}
              initial={{ opacity: 0, y: -5, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -5, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              {isSent ? (
                <div className="py-6 text-center">
                  <p className="text-green-400 font-medium mb-2">Message sent!</p>
                  <p className="text-sm text-white/70">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Quick message</h4>
                    <p className="text-sm text-white/70">Send a brief message and I'll get back to you.</p>
                  </div>
                  
                  <div className="relative">
                    <label 
                      htmlFor="name" 
                      className={cn(
                        "absolute left-3 transition-all duration-150 pointer-events-none",
                        (name || focusedInput === 'name') ? "text-xs top-1" : "text-sm top-1/2 -translate-y-1/2",
                        focusedInput === 'name' ? "text-primary" : "text-white/60"
                      )}
                    >
                      Your name
                    </label>
                    <input
                      id="name"
                      className={cn(
                        "flex h-10 w-full rounded-md border bg-zinc-900 px-3 pt-4 pb-1 text-sm focus-visible:outline-none transition-colors",
                        focusedInput === 'name' ? "border-primary" : "border-white/10"
                      )}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={() => setFocusedInput('name')}
                      onBlur={() => setFocusedInput(null)}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <label 
                      htmlFor="email" 
                      className={cn(
                        "absolute left-3 transition-all duration-150 pointer-events-none",
                        (email || focusedInput === 'email') ? "text-xs top-1" : "text-sm top-1/2 -translate-y-1/2",
                        focusedInput === 'email' ? "text-primary" : "text-white/60"
                      )}
                    >
                      Your email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={cn(
                        "flex h-10 w-full rounded-md border bg-zinc-900 px-3 pt-4 pb-1 text-sm focus-visible:outline-none transition-colors",
                        focusedInput === 'email' ? "border-primary" : "border-white/10"
                      )}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedInput('email')}
                      onBlur={() => setFocusedInput(null)}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <label 
                      htmlFor="message" 
                      className={cn(
                        "absolute left-3 transition-all duration-150 pointer-events-none",
                        (message || focusedInput === 'message') ? "text-xs top-2" : "text-sm top-2",
                        focusedInput === 'message' ? "text-primary" : "text-white/60"
                      )}
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      className={cn(
                        "flex min-h-[80px] w-full rounded-md border bg-zinc-900 px-3 pt-6 pb-2 text-sm focus-visible:outline-none transition-colors",
                        focusedInput === 'message' ? "border-primary" : "border-white/10"
                      )}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onFocus={() => setFocusedInput('message')}
                      onBlur={() => setFocusedInput(null)}
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium bg-white/80 text-black hover:bg-white/60 transition-colors w-full disabled:opacity-50"
                    disabled={isSending}
                  >
                    {isSending ? "Sending..." : "Send message"}
                  </button>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        portalContainer
      )}
    </div>
  )
}

