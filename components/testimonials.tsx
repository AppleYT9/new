import { TranslatedText } from "@/components/translated-text"
import { Star } from "lucide-react"

export function Testimonials() {
    const testimonials = [
        {
            name: "Priya Sharma",
            role: "Regular Commuter",
            content: "Safe Go has given me back my independence. I no longer have to worry about how I'll get to work.",
            rating: 5
        },
        {
            name: "Rajesh Kumar",
            role: "Senior Citizen",
            content: "The elderly mode is a blessing. The drivers are so patient and helpful. I feel safe travelling alone.",
            rating: 5
        },
        {
            name: "Anita Desai",
            role: "Student",
            content: "Safe, reliable, and easy to use. The women's safety features make late-night study sessions stress-free.",
            rating: 5
        }
    ]

    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4"><TranslatedText text="What Our Users Say" /></h2>
                    <p className="text-muted-foreground"><TranslatedText text="Stories from our community members." /></p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-background border shadow-sm">
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="mb-6 text-muted-foreground leading-relaxed">"<TranslatedText text={t.content} />"</p>
                            <div>
                                <div className="font-semibold">{t.name}</div>
                                <div className="text-sm text-muted-foreground"><TranslatedText text={t.role} /></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
