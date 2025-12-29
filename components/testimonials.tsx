import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Wheelchair User",
      content:
        "Finally, a service that understands my needs. No more rejection calls or long waits. AccessRide has given me my independence back.",
      rating: 5,
    },
    {
      name: "Robert K.",
      role: "Senior Citizen",
      content:
        "The elderly mode makes booking so simple. The drivers are patient and helpful. I can visit my grandchildren without depending on family.",
      rating: 5,
    },
    {
      name: "Priya S.",
      role: "Working Professional",
      content:
        "The women's safety features give me peace of mind during late-night commutes. Real-time sharing with family is a game-changer.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">Trusted by Our Community</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real stories from people who've experienced the AccessRide difference
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-2xl bg-card p-8 shadow-sm border border-border">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-6 text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
