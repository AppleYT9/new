import { TranslatedText } from "@/components/translated-text"
import Image from "next/image"

export function ImpactStats() {
    const stats = [
        { label: "Rides Completed", value: "10,000+" },
        { label: "Active Drivers", value: "500+" },
        { label: "Cities Covered", value: "12" },
        { label: "User Rating", value: "4.9/5" },
    ]

    return (
        <section className="py-24 bg-primary text-primary-foreground">
            <div className="container px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6"><TranslatedText text="Making a Measureable Difference" /></h2>
                        <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8">
                            <TranslatedText text="We are committed to transforming the daily lives of people with mobility challenges through reliable and dignified transportation." />
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-sm opacity-80"><TranslatedText text={stat.label} /></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                        <Image
                            src="/mission-logo.png"
                            alt="Freedom of movement logo"
                            fill
                            className="object-contain p-12 transition-transform duration-700 group-hover:scale-105 bg-white"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
                            <div className="text-white">
                                <h3 className="text-2xl font-bold mb-3"><TranslatedText text="Our Mission" /></h3>
                                <p className="text-lg text-white/90 leading-relaxed font-medium">
                                    <TranslatedText text="To provide freedom of movement for everyone, everywhere." />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
