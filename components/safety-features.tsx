import { Shield, Bell, Users, Eye, AlertTriangle } from "lucide-react"

export function SafetyFeatures() {
  return (
    <section id="safety" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Safety & Trust at Every Step
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Multiple layers of protection ensure your journey is secure and comfortable
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto mb-12">
          <div className="rounded-2xl bg-card p-8 shadow-sm border border-border">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-balance">Verified Drivers</h3>
            <ul className="space-y-3 text-muted-foreground leading-relaxed">
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Comprehensive background checks and verification</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Accessibility training and certification programs</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Regular safety audits and driver reviews</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-card p-8 shadow-sm border border-border">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Eye className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-balance">Real-Time Tracking</h3>
            <ul className="space-y-3 text-muted-foreground leading-relaxed">
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Live GPS tracking throughout your journey</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Share trip details with family members</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Automatic ETA updates and route monitoring</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-card p-8 shadow-sm border border-border">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Bell className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-balance">SOS Panic Button</h3>
            <ul className="space-y-3 text-muted-foreground leading-relaxed">
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>One-tap emergency alert system</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Instant notification to emergency contacts</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Auto emergency dial feature (concept)</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-card p-8 shadow-sm border border-border">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Users className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-balance">Women's Safety Mode</h3>
            <ul className="space-y-3 text-muted-foreground leading-relaxed">
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Women-only driver preference option</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Enhanced night travel safety alerts</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Dedicated safety education and support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl bg-primary/5 p-8 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Night Shift Safety Protocols</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Extra precautions for night rides including enhanced verification, brighter tracking, and priority
                emergency response channels to ensure maximum safety during late hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
