export function ImpactStats() {
  return (
    <section id="impact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">Our Impact & Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Filling the critical gap between emergency ambulance services and daily transportation needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-12">
          <div className="text-center">
            <div className="mb-4 text-5xl font-bold text-primary">10-15%</div>
            <p className="text-sm font-medium mb-2">of Population</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Has mobility impairments requiring accessible transportation
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 text-5xl font-bold text-primary">80%+</div>
            <p className="text-sm font-medium mb-2">Rejection Rate</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Wheelchair users rejected by standard ride services
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 text-5xl font-bold text-primary text-balance">Daily Gap</div>
            <p className="text-sm font-medium mb-2">Transportation Need</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ambulances serve emergencies only, not routine travel
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl bg-card p-8 shadow-sm border border-border">
          <h3 className="mb-6 text-2xl font-bold text-center text-balance">Why AccessRide Matters</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Ambulances are for emergencies.</strong> They're designed for medical
              crises, not daily commutes to work, grocery stores, or social events. This leaves millions of
              mobility-impaired individuals without reliable transportation options.
            </p>
            <p>
              <strong className="text-foreground">Standard ride services fail accessibility needs.</strong> With
              rejection rates exceeding 80%, wheelchair users face constant uncertainty and discrimination when trying
              to book rides.
            </p>
            <p>
              <strong className="text-foreground">AccessRide fills this critical gap.</strong> We're not competing with
              ambulances—we're providing the everyday transportation solution that enables independence, dignity, and
              participation in daily life for those who need accessible vehicles.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
