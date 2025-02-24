import type React from "react"

interface TechnologyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function TechnologyCard({ children, className, ...props }: TechnologyCardProps) {
  return (
    <div 
      className={`relative rounded-xl border border-zinc-800 bg-zinc-900 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

