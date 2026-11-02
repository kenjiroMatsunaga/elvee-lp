import Hero from '../components/sections/Hero'
import ConceptSection from '../components/sections/ConceptSection'
import FeatureSection from '../components/sections/FeatureSection'
import ContactCtaSection from '../components/sections/ContactCtaSection'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ConceptSection />
      <FeatureSection />
      <ContactCtaSection />
    </div>
  )
}
