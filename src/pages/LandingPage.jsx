import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BenefitsSection from '../components/PainSection'
import QuizSection from '../components/QuizSection'
import SocialProof from '../components/SocialProof'
import FAQ from '../components/FAQ'
import CtaFooter from '../components/CtaFooter'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BenefitsSection />
        <QuizSection />
        <SocialProof />
        <FAQ />
        <CtaFooter />
      </main>
    </>
  )
}
