"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
    MapPin,
    Phone,
    MessageCircle,
    AlertCircle,
    Star,
    Navigation,
    Clock,
    Share2,
    Armchair as Wheelchair,
} from "lucide-react"
import Link from "next/link"
import { TranslatedText } from "@/components/translated-text"

interface RideTrackingProps {
    rideId: string
}

export function RideTracking({ rideId }: RideTrackingProps) {
    const [showSOS, setShowSOS] = useState(false)

    // Mock ride data
    const rideData = {
        status: "in-progress",
        driver: {
            name: "Sarah Johnson",
            rating: 4.9,
            phone: "(555) 123-4567",
            vehicle: "Toyota Sienna WAV",
            plate: "ABC-1234",
        },
        pickup: "123 Main St, Downtown",
        dropoff: "456 Oak Ave, Uptown",
        eta: "12 mins",
        fare: "$32.50",
        features: ["Wheelchair Ramp", "Assistance Available", "GPS Tracked"],
    }

    return (
        <div className="min-h-screen bg-background">
            <header className="border-b border-border bg-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Link href="/" className="text-xl font-semibold">
                                Safe Go
                            </Link>
                            <Badge className="bg-primary text-primary-foreground"><TranslatedText text="Ride" /> #{rideId}</Badge>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-3 w-3 items-center justify-center">
                                    <span className="absolute h-3 w-3 rounded-full bg-primary animate-ping" />
                                    <span className="relative h-2 w-2 rounded-full bg-primary" />
                                </div>
                                <h1 className="text-2xl font-bold"><TranslatedText text="Ride in Progress" /></h1>
                            </div>
                            <Badge variant="secondary" className="text-sm">
                                <Clock className="mr-1 h-3 w-3" />
                                ETA {rideData.eta}
                            </Badge>
                        </div>
                        <p className="text-muted-foreground"><TranslatedText text="Your driver is on the way" /></p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="lg:col-span-2 space-y-6">
                            <Card className="rounded-2xl shadow-sm overflow-hidden">
                                <div className="aspect-video bg-muted flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                                    <div className="relative text-center">
                                        <Navigation className="h-16 w-16 text-primary mx-auto mb-3" />
                                        <p className="text-lg font-semibold mb-1"><TranslatedText text="Live GPS Tracking" /></p>
                                        <p className="text-sm text-muted-foreground"><TranslatedText text="Real-time location updates" /></p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 rounded-2xl shadow-sm">
                                <h2 className="mb-4 text-lg font-bold"><TranslatedText text="Journey Details" /></h2>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex items-start gap-3">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                                <MapPin className="h-4 w-4 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-muted-foreground mb-1"><TranslatedText text="Pickup Location" /></p>
                                                <p className="font-medium">{rideData.pickup}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pl-4 border-l-2 border-dashed border-border h-8" />

                                    <div>
                                        <div className="flex items-start gap-3">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                                                <MapPin className="h-4 w-4 text-accent" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-muted-foreground mb-1"><TranslatedText text="Drop-off Location" /></p>
                                                <p className="font-medium">{rideData.dropoff}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Separator className="my-4" />

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground"><TranslatedText text="Estimated Fare" /></span>
                                    <span className="text-lg font-bold">{rideData.fare}</span>
                                </div>
                            </Card>

                            <Card className="p-6 rounded-2xl shadow-sm bg-primary/5 border-primary/20">
                                <div className="flex items-start gap-3 mb-4">
                                    <Wheelchair className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold mb-1"><TranslatedText text="Accessibility Features" /></h3>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {rideData.features.map((feature, index) => (
                                                <Badge key={index} variant="secondary" className="rounded-full">
                                                    <TranslatedText text={feature} />
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div className="space-y-6">
                            <Card className="p-6 rounded-2xl shadow-sm">
                                <h2 className="mb-4 text-lg font-bold"><TranslatedText text="Your Driver" /></h2>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-16 w-16">
                                            <AvatarFallback className="bg-primary/10 text-primary text-lg">
                                                {rideData.driver.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <p className="font-semibold">{rideData.driver.name}</p>
                                            <div className="flex items-center gap-1 text-sm">
                                                <Star className="h-4 w-4 fill-primary text-primary" />
                                                <span className="font-medium">{rideData.driver.rating}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-xl bg-muted p-3 space-y-2 text-sm">
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground"><TranslatedText text="Vehicle" /></span>
                                            <span className="font-medium">{rideData.driver.vehicle}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground"><TranslatedText text="Plate" /></span>
                                            <span className="font-medium">{rideData.driver.plate}</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                                            <Phone className="mr-2 h-4 w-4" />
                                            <TranslatedText text="Call" />
                                        </Button>
                                        <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                                            <MessageCircle className="mr-2 h-4 w-4" />
                                            <TranslatedText text="Message" />
                                        </Button>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 rounded-2xl shadow-sm">
                                <h2 className="mb-4 text-lg font-bold"><TranslatedText text="Safety & Support" /></h2>
                                <div className="space-y-3">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full justify-start rounded-xl bg-transparent"
                                        onClick={() => setShowSOS(true)}
                                    >
                                        <AlertCircle className="mr-2 h-4 w-4 text-destructive" />
                                        <span><TranslatedText text="Emergency SOS" /></span>
                                    </Button>

                                    <Button variant="outline" size="sm" className="w-full justify-start rounded-xl bg-transparent">
                                        <Share2 className="mr-2 h-4 w-4" />
                                        <span><TranslatedText text="Share Trip" /></span>
                                    </Button>

                                    <Button variant="outline" size="sm" className="w-full justify-start rounded-xl bg-transparent">
                                        <Phone className="mr-2 h-4 w-4" />
                                        <span><TranslatedText text="Contact Support" /></span>
                                    </Button>
                                </div>
                            </Card>

                            <Card className="p-4 rounded-2xl shadow-sm bg-accent/5 border-accent/20">
                                <p className="text-sm text-foreground leading-relaxed">
                                    <span className="font-medium"><TranslatedText text="Safety First" />:</span>{" "}
                                    <TranslatedText text="Your ride is being tracked in real-time and can be shared with emergency contacts." />
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>

            {showSOS && (
                <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
                    <Card className="max-w-md w-full p-6 rounded-2xl shadow-lg">
                        <div className="text-center">
                            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
                                <AlertCircle className="h-8 w-8 text-destructive" />
                            </div>
                            <h2 className="mb-3 text-2xl font-bold"><TranslatedText text="Emergency SOS" /></h2>
                            <p className="mb-6 text-muted-foreground leading-relaxed">
                                <TranslatedText text="This will immediately alert emergency services and your emergency contacts. Only use in case of a real emergency." />
                            </p>
                            <div className="space-y-3">
                                <Button size="lg" variant="destructive" className="w-full h-12 rounded-xl">
                                    <AlertCircle className="mr-2 h-5 w-5" />
                                    <TranslatedText text="Activate Emergency SOS" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full h-12 rounded-xl bg-transparent"
                                    onClick={() => setShowSOS(false)}
                                >
                                    <TranslatedText text="Cancel" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    )
}
