"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { MapPin, Mic } from "lucide-react"
import { TranslatedText } from "@/components/translated-text"

interface LocationStepProps {
    bookingData: {
        pickupAddress: string
        dropoffAddress: string
    }
    updateBookingData: (data: Partial<{ pickupAddress: string; dropoffAddress: string }>) => void
}

export function LocationStep({ bookingData, updateBookingData }: LocationStepProps) {
    return (
        <div>
            <h2 className="mb-2 text-2xl font-bold text-balance"><TranslatedText text="Pickup & Drop-off Locations" /></h2>
            <p className="mb-8 text-muted-foreground leading-relaxed"><TranslatedText text="Enter your journey details" /></p>

            <div className="space-y-6">
                <div>
                    <Label htmlFor="pickup" className="text-base font-medium mb-2 block">
                        <TranslatedText text="Pickup Location" />
                    </Label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            id="pickup"
                            placeholder="Enter pickup address"
                            value={bookingData.pickupAddress}
                            onChange={(e) => updateBookingData({ pickupAddress: e.target.value })}
                            className="pl-10 h-12 rounded-xl"
                        />
                    </div>
                </div>

                <div>
                    <Label htmlFor="dropoff" className="text-base font-medium mb-2 block">
                        <TranslatedText text="Drop-off Location" />
                    </Label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            id="dropoff"
                            placeholder="Enter drop-off address"
                            value={bookingData.dropoffAddress}
                            onChange={(e) => updateBookingData({ dropoffAddress: e.target.value })}
                            className="pl-10 h-12 rounded-xl"
                        />
                    </div>
                </div>

                <div className="rounded-xl bg-muted p-4">
                    <div className="aspect-video bg-background rounded-lg flex items-center justify-center border border-border">
                        <div className="text-center">
                            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground"><TranslatedText text="Map interface would display here" /></p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="outline" size="lg" className="flex-1 rounded-xl bg-transparent">
                        <Mic className="mr-2 h-5 w-5" />
                        <TranslatedText text="Voice Booking" />
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-xl bg-transparent">
                        <MapPin className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
