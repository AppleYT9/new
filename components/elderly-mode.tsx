"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Heart, Phone, MapPin, Volume2 } from "lucide-react"
import Link from "next/link"

export function ElderlyMode() {
  const [elderlyModeEnabled, setElderlyModeEnabled] = useState(true)
  const [familyTracking, setFamilyTracking] = useState(false)
  const [pickupAddress, setPickupAddress] = useState("")
  const [dropoffAddress, setDropoffAddress] = useState("")

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Heart className="h-8 w-8" />
              </div>
              <span className="text-2xl font-semibold">AccessRide</span>
            </Link>
            <Button size="lg" variant="outline" className="h-14 px-6 text-lg rounded-xl bg-transparent">
              <Phone className="mr-2 h-6 w-6" />
              Call Support
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="mb-3 text-4xl font-bold text-balance">Elderly Mode</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">Simplified booking for seniors</p>
            </div>
            <div className="flex items-center gap-3">
              <Label htmlFor="elderly-toggle" className="text-lg font-medium">
                Elderly Mode
              </Label>
              <Switch
                id="elderly-toggle"
                checked={elderlyModeEnabled}
                onCheckedChange={setElderlyModeEnabled}
                className="scale-125"
              />
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-8 rounded-2xl shadow-sm">
              <h2 className="mb-6 text-3xl font-bold text-balance">Book Your Ride</h2>

              <div className="space-y-8">
                <div>
                  <Label htmlFor="pickup-elderly" className="text-xl font-medium mb-3 block">
                    Where are you now?
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                    <Input
                      id="pickup-elderly"
                      placeholder="Your current location"
                      value={pickupAddress}
                      onChange={(e) => setPickupAddress(e.target.value)}
                      className="pl-14 h-16 text-xl rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="dropoff-elderly" className="text-xl font-medium mb-3 block">
                    Where do you want to go?
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                    <Input
                      id="dropoff-elderly"
                      placeholder="Your destination"
                      value={dropoffAddress}
                      onChange={(e) => setDropoffAddress(e.target.value)}
                      className="pl-14 h-16 text-xl rounded-xl"
                    />
                  </div>
                </div>

                <Button size="lg" className="w-full h-16 text-xl rounded-xl">
                  <Volume2 className="mr-3 h-6 w-6" />
                  Use Voice to Book
                </Button>
              </div>
            </Card>

            <Card className="p-8 rounded-2xl shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-balance">Additional Options</h2>

              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4 p-6 rounded-xl bg-muted">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Family Member Tracking</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">Share your ride with family members</p>
                  </div>
                  <Switch checked={familyTracking} onCheckedChange={setFamilyTracking} className="scale-125 mt-2" />
                </div>

                <div className="p-6 rounded-xl bg-muted">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Patient Driver Assistance</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        All our drivers are trained to provide patient, compassionate assistance to senior passengers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Button size="lg" className="w-full h-20 text-2xl rounded-xl">
              Book Ride Now
            </Button>

            <div className="grid gap-4 sm:grid-cols-2">
              <Button size="lg" variant="outline" className="h-16 text-xl rounded-xl bg-transparent">
                <Phone className="mr-2 h-6 w-6" />
                Call for Help
              </Button>
              <Button size="lg" variant="outline" className="h-16 text-xl rounded-xl bg-transparent" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
