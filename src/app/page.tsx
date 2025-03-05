import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { TimelineComponent } from '@/components/Timeline'
import Technologies from '@/components/Technologies'
import Projects from '@/components/Projects'
import Script from 'next/script'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Script
        id="schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sebastian Brandes",
            "url": "https://sebastianbrandes.com",
            "jobTitle": "Webentwickler & Softwareingenieur",
            "knowsAbout": ["Webentwicklung", "Frontend", "React", "Next.js", "JavaScript", "TypeScript"],
            "sameAs": [
              "https://github.com/sebastianbrandes",
              "https://linkedin.com/in/sebastianbrandes"
            ]
          })
        }}
      />
      <Navbar />
      <Hero />
      <Technologies />
      <TimelineComponent />
      <Projects />
    </main>
  )
}
