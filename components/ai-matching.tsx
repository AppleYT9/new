import { Brain, Zap, Target, TrendingDown } from "lucide-react"

export function AIMatching() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Brain className="h-4 w-4" />
            <span>AI-Powered Intelligence</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Smart Matching for Perfect Rides
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our AI understands your specific needs and matches you with the right vehicle and driver every time
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <div className="rounded-2xl bg-card p-6 shadow-sm border border-border text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold text-balance">Needs Analysis</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Analyzes wheelchair size, ramp needs, and assistance requirements
            </p>
          </div>

          <div className="rounded-2xl bg-card p-6 shadow-sm border border-border text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold text-balance">Instant Matching</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Connects you with available WAV drivers in real-time
            </p>
          </div>

          <div className="rounded-2xl bg-card p-6 shadow-sm border border-border text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <TrendingDown className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold text-balance">Reduced Refusals</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Eliminates rejections by matching needs before booking
            </p>
          </div>

          <div className="rounded-2xl bg-card p-6 shadow-sm border border-border text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold text-balance">Smart Predictions</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Predicts wait times and optimizes driver availability
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-card p-8 shadow-sm border border-border">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="mb-3 text-2xl font-bold text-balance">How It Works</h3>
              <ol className="space-y-3 text-muted-foreground leading-relaxed">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    1
                  </span>
                  <span>Tell us your accessibility needs (wheelchair type, assistance level)</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    2
                  </span>
                  <span>AI analyzes available WAV drivers and vehicle specifications</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    3
                  </span>
                  <span>Get matched with the perfect driver and vehicle for your journey</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    4
                  </span>
                  <span>Enjoy a safe, comfortable ride with real-time tracking</span>
                </li>
              </ol>
            </div>
            <div className="flex-shrink-0">
              <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-primary/10">
                <Brain className="h-20 w-20 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
