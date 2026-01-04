"use client"
import { TranslatedText } from "@/components/translated-text"
import { AlertTriangle, Clock, Ban } from "lucide-react"

import Image from "next/image"

export function ProblemStatement() {
    const problems = [
        {
            icon: AlertTriangle,
            title: "Unreliable Options",
            description: "Traditional transit often lacks reliability for specialized needs."
        },
        {
            icon: Clock,
            title: "Long Wait Times",
            description: "Specialized transport can take hours to arrive."
        },
        {
            icon: Ban,
            title: "Lack of Accessibility",
            description: "Many vehicles are simply not equipped for wheelchairs."
        }
    ]

    return (
        <section className="py-24 bg-background">
            <div className="container px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 leading-tight"><TranslatedText text="Mobility Should Be a Right, Not a Privilege" /></h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            <TranslatedText text="For millions of people with mobility challenges, seniors, and women, finding safe and reliable transportation remains a daily struggle." />
                        </p>
                        <div className="space-y-6">
                            {problems.map((p, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                                        <p.icon className="w-6 h-6 text-destructive" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1"><TranslatedText text={p.title} /></h3>
                                        <p className="text-muted-foreground text-sm"><TranslatedText text={p.description} /></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-square lg:aspect-auto h-full min-h-[400px] rounded-3xl bg-muted overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?q=80&w=2072&auto=format&fit=crop"
                            alt="Illustration of transportation challenges"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
