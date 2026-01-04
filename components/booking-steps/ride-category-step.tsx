"use client"

import { Armchair as Wheelchair, Heart, Shield, Car } from "lucide-react"
import { TranslatedText } from "@/components/translated-text"

interface RideCategoryStepProps {
    bookingData: {
        rideCategory: string
    }
    updateBookingData: (data: { rideCategory: string }) => void
}

export function RideCategoryStep({ bookingData, updateBookingData }: RideCategoryStepProps) {
    const categories = [
        {
            id: "wav",
            title: "Wheelchair-Accessible Ride",
            subtitle: "WAV with ramp support",
            icon: Wheelchair,
            color: "primary",
        },
        {
            id: "elderly",
            title: "Elderly Mode Ride",
            subtitle: "Patient assistance & support",
            icon: Heart,
            color: "primary",
        },
        {
            id: "women",
            title: "Women-Only Ride",
            subtitle: "Pink Safety Mode",
            icon: Shield,
            color: "accent",
        },
        {
            id: "standard",
            title: "Standard Ride",
            subtitle: "Regular vehicle",
            icon: Car,
            color: "primary",
        },
    ]

    return (
        <div>
            <h2 className="mb-2 text-2xl font-bold text-balance"><TranslatedText text="Select Ride Category" /></h2>
            <p className="mb-8 text-muted-foreground leading-relaxed"><TranslatedText text="Choose the type of ride that best fits your needs" /></p>

            <div className="grid gap-4 sm:grid-cols-2">
                {categories.map((category) => {
                    const Icon = category.icon
                    const isSelected = bookingData.rideCategory === category.id

                    return (
                        <button
                            key={category.id}
                            onClick={() => updateBookingData({ rideCategory: category.id })}
                            className={`group relative rounded-2xl border-2 p-6 text-left transition-all ${isSelected
                                    ? "border-primary bg-primary/5 shadow-sm"
                                    : "border-border bg-background hover:border-primary/50 hover:bg-primary/5"
                                }`}
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-colors ${isSelected
                                            ? category.color === "accent"
                                                ? "bg-accent text-accent-foreground"
                                                : "bg-primary text-primary-foreground"
                                            : category.color === "accent"
                                                ? "bg-accent/10 text-accent"
                                                : "bg-primary/10 text-primary"
                                        }`}
                                >
                                    <Icon className="h-7 w-7" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-1 font-semibold text-balance"><TranslatedText text={category.title} /></h3>
                                    <p className="text-sm text-muted-foreground"><TranslatedText text={category.subtitle} /></p>
                                </div>
                                {isSelected && (
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
