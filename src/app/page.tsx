import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import { TimelineComponent } from '@/components/Timeline'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TimelineComponent />
      <Services />
    </main>
  )
}
