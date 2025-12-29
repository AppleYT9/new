import { Button } from "@/components/ui/button"
import { ArrowRight, Mic, Shield, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Accessibility Platform</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Ride Booking Built for <span className="text-primary">Everyone</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl text-pretty">
            AI-Powered Accessibility Ride Booking Platform for Wheelchair Users, Seniors, and Women's Safety. Experience
            verified wheelchair-accessible vehicles with real-time tracking and compassionate service.
          </p>

          <p className="mb-10 text-base font-medium text-foreground">
            Not an ambulance — your daily commute support partner
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-base rounded-xl" asChild>
              <Link href="/book">
                Book a Ride
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-xl bg-transparent" asChild>
              <Link href="/driver">Register as Driver</Link>
            </Button>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-balance">Verified WAV Drivers</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All drivers verified with wheelchair-accessible vehicles and proper training
              </p>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Mic className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-balance">Voice Booking</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Book rides easily with voice commands and guided assistance
              </p>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-balance">AI Matching</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Smart matching reduces wait times and ensures proper vehicle fit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
