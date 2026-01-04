import { TranslatedText } from "@/components/translated-text"
import { Shield, AlertCircle, Phone, MapPin, Share2, Eye } from "lucide-react"

export function SafetyFeatures() {
    const features = [
        {
            title: "Emergency SOS",
            description: "Instant access to emergency services and contacts with a single tap.",
            icon: AlertCircle,
        },
        {
            title: "Live Trip Sharing",
            description: "Share your live location and trip status with trusted family members.",
            icon: Share2,
        },
        {
            title: "24/7 Support",
            description: "Round-the-clock dedicated support team for any assistance.",
            icon: Phone,
        },
        {
            title: "Real-Time Monitoring",
            description: "Continuous ride monitoring to ensure route compliance.",
            icon: Eye,
        },
        {
            title: "Verified Drivers",
            description: "Rigorous background checks and accessibility training.",
            icon: Shield,
        },
        {
            title: "Safe Locations",
            description: "Pickups and drop-offs at verified safe and accessible points.",
            icon: MapPin,
        },
    ]

    return (
        <section className="py-24">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4"><TranslatedText text="Uncompromised Safety" /></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto"><TranslatedText text="Your safety is our top priority. We've built comprehensive safety features into every aspect of the ride." /></p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="p-6 rounded-2xl border bg-card/50">
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <f.icon className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-2"><TranslatedText text={f.title} /></h3>
                            <p className="text-sm text-muted-foreground"><TranslatedText text={f.description} /></p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
