"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"
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
  const [error, setError] = useState<string | null>(null)
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
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Fehler beim Senden der Nachricht');
      }

      // Erfolgreicher Versand
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
    } catch (err) {
      setIsSending(false)
      setError(err instanceof Error ? err.message : 'Ein unbekannter Fehler ist aufgetreten')
      
      // Fehler nach 5 Sekunden ausblenden
      setTimeout(() => {
        setError(null)
      }, 5000)
    }
  }

  // Toggle popover
  const handleButtonClick = () => {
    setIsOpen(!isOpen)
    // Reset error state when opening/closing
    setError(null)
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
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="w-12 h-12 text-green-400" />
                  </div>
                  <p className="text-green-400 font-medium mb-2">Message sent!</p>
                  <p className="text-sm text-white/70">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Quick message</h4>
                    <p className="text-sm text-white/70">Send a brief message and I'll get back to you.</p>
                  </div>
                  
                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-md flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  )}
                  
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
                        "flex h-10 w-full rounded-md border bg-zinc-800 px-3 pt-4 pb-1 text-sm focus-visible:outline-none transition-colors",
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
                        "flex h-10 w-full rounded-md border bg-zinc-800 px-3 pt-4 pb-1 text-sm focus-visible:outline-none transition-colors",
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
                        "flex min-h-[80px] w-full rounded-md border bg-zinc-800 px-3 pt-6 pb-2 text-sm focus-visible:outline-none transition-colors",
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
                    className={cn(
                      "inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors w-full",
                      isSending 
                        ? "bg-white/50 text-black/70 cursor-not-allowed" 
                        : "bg-white text-black hover:bg-white/90"
                    )}
                    disabled={isSending}
                  >
                    {isSending ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : "Send message"}
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

