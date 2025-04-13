import './App.css'
import {
  Navbar,
  Hero,
  ServiceSection,
  TestimonialSection,
  HowItWorks,
  TrustSignals,
  CallToAction,
  Footer
} from './components'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ServiceSection />
        <HowItWorks />
        <TestimonialSection />
        <TrustSignals />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
