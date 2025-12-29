import { AlertCircle, Ban, TrendingUp } from "lucide-react"

export function ProblemStatement() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">The Problem We're Solving</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Millions face daily transportation barriers that limit their independence and dignity
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="rounded-2xl bg-card p-8 shadow-sm border border-border">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-destructive/10">
              <Ban className="h-7 w-7 text-destructive" />
            </div>
            <div className="mb-2 text-4xl font-bold">80%+</div>
            <p className="text-sm font-medium mb-2">Wheelchair User Rejection Rate</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Most ride services reject wheelchair users due to lack of accessible vehicles
            </p>
          </div>

          <div className="rounded-2xl bg-card p-8 shadow-sm border border-border">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <TrendingUp className="h-7 w-7 text-primary" />
            </div>
            <div className="mb-2 text-4xl font-bold">10-15%</div>
            <p className="text-sm font-medium mb-2">Population with Mobility Needs</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Millions of people require accessible transportation for daily activities
            </p>
          </div>

          <div className="rounded-2xl bg-card p-8 shadow-sm border border-border">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <AlertCircle className="h-7 w-7 text-accent" />
            </div>
            <div className="mb-2 text-4xl font-bold text-balance">Emergency Only</div>
            <p className="text-sm font-medium mb-2">Ambulances Not for Daily Use</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ambulances serve emergencies, leaving a gap for routine transportation needs
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
