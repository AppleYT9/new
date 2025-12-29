import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProblemStatement } from "@/components/problem-statement"
import { Features } from "@/components/features"
import { AIMatching } from "@/components/ai-matching"
import { SafetyFeatures } from "@/components/safety-features"
import { ImpactStats } from "@/components/impact-stats"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <Features />
        <AIMatching />
        <SafetyFeatures />
        <ImpactStats />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
