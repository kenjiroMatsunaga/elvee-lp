import Hero from '../components/sections/Hero'
import ConceptSection from '../components/sections/ConceptSection'
import ContactCtaSection from '../components/sections/ContactCtaSection'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ConceptSection />
      <ContactCtaSection />
    </div>
  )
}
