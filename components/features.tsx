import { TranslatedText } from "@/components/translated-text"
import { Shield, Mic, Sparkles } from "lucide-react"

export function Features() {
    const features = [
        {
            title: "Verified WAV Drivers",
            description: "All drivers verified with wheelchair-accessible vehicles and proper training.",
            icon: Shield,
        },
        {
            title: "Voice Booking",
            description: "Book rides easily with voice commands and guided assistance.",
            icon: Mic,
        },
        {
            title: "AI Matching",
            description: "Smart matching reduces wait times and ensures proper vehicle fit.",
            icon: Sparkles,
        },
    ]

    return (
        <section className="py-24 bg-background">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4"><TranslatedText text="Key Configuration" /></h2>
                    <p className="text-muted-foreground"><TranslatedText text="Everything you need for a safe and accessible journey." /></p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                <f.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2"><TranslatedText text={f.title} /></h3>
                            <p className="text-muted-foreground"><TranslatedText text={f.description} /></p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
