import { Armchair as Wheelchair, Heart, Shield, Users, MapPin, Clock } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Wheelchair,
      title: "Wheelchair-Accessible Vehicles",
      description: "Verified WAV fleet with ramps, proper spacing, and trained assistance",
    },
    {
      icon: Heart,
      title: "Elderly Mode",
      description: "Simplified interface, larger text, and patient driver assistance",
    },
    {
      icon: Shield,
      title: "Women's Safety Mode",
      description: "Women-only driver option, trip sharing, and panic button features",
    },
    {
      icon: Users,
      title: "Verified Drivers",
      description: "Background-checked drivers with accessibility training and certifications",
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Live GPS tracking with family member sharing and ETA updates",
    },
    {
      icon: Clock,
      title: "AI-Powered Matching",
      description: "Smart algorithm matches your needs to the perfect vehicle and driver",
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Features Built for <span className="text-primary">Accessibility</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every feature designed with dignity, safety, and independence in mind
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group rounded-2xl bg-card p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-balance">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
