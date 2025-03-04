import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { TimelineComponent } from '@/components/Timeline'
import Technologies from '@/components/Technologies'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Technologies />
      <TimelineComponent />
      <Projects />
    </main>
  )
}
