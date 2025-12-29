"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertCircle, Users, Share2, Bell, Moon, Eye, Phone } from "lucide-react"
import Link from "next/link"

export function WomenSafetyMode() {
  const [womenDriver, setWomenDriver] = useState(true)
  const [tripSharing, setTripSharing] = useState(true)
  const [nightAlerts, setNightAlerts] = useState(true)
  const [pickupAddress, setPickupAddress] = useState("")
  const [dropoffAddress, setDropoffAddress] = useState("")

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Shield className="h-6 w-6" />
              </div>
              <span className="text-xl font-semibold">
                AccessRide <Badge className="ml-2 bg-accent text-accent-foreground">Pink Safety</Badge>
              </span>
            </Link>
            <Button variant="outline" size="sm" asChild className="rounded-xl bg-transparent">
              <Link href="/">Exit Mode</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <Shield className="h-4 w-4" />
              <span>Women's Safety Mode Active</span>
            </div>
            <h1 className="mb-3 text-3xl font-bold text-balance sm:text-4xl">Safe Rides, Always</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Enhanced safety features designed specifically for women's peace of mind
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 sm:p-8 rounded-2xl shadow-sm border-accent/20">
              <h2 className="mb-6 text-2xl font-bold text-balance">Safety Features</h2>

              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-accent/5 border border-accent/20">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Women-Only Driver</h3>
                      <p className="text-sm text-muted-foreground">Request female drivers exclusively</p>
                    </div>
                  </div>
                  <Switch checked={womenDriver} onCheckedChange={setWomenDriver} className="mt-2" />
                </div>

                <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-accent/5 border border-accent/20">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Share2 className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Live Trip Sharing</h3>
                      <p className="text-sm text-muted-foreground">Share real-time location with contacts</p>
                    </div>
                  </div>
                  <Switch checked={tripSharing} onCheckedChange={setTripSharing} className="mt-2" />
                </div>

                <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-accent/5 border border-accent/20">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Moon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Night Travel Alerts</h3>
                      <p className="text-sm text-muted-foreground">Enhanced notifications for late-night rides</p>
                    </div>
                  </div>
                  <Switch checked={nightAlerts} onCheckedChange={setNightAlerts} className="mt-2" />
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 rounded-2xl shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-balance">Book Your Safe Ride</h2>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="pickup" className="text-base font-medium mb-2 block">
                    Pickup Location
                  </Label>
                  <Input
                    id="pickup"
                    placeholder="Enter pickup address"
                    value={pickupAddress}
                    onChange={(e) => setPickupAddress(e.target.value)}
                    className="h-12 rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="dropoff" className="text-base font-medium mb-2 block">
                    Drop-off Location
                  </Label>
                  <Input
                    id="dropoff"
                    placeholder="Enter drop-off address"
                    value={dropoffAddress}
                    onChange={(e) => setDropoffAddress(e.target.value)}
                    className="h-12 rounded-xl"
                  />
                </div>

                <Button size="lg" className="w-full h-12 rounded-xl">
                  Book Safe Ride
                </Button>
              </div>
            </Card>

            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="p-6 rounded-2xl shadow-sm border-accent/20">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-semibold text-balance">Real-Time Monitoring</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your ride is monitored 24/7 with GPS tracking and route verification
                </p>
              </Card>

              <Card className="p-6 rounded-2xl shadow-sm border-accent/20">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Bell className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-semibold text-balance">SOS Panic Button</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  One-tap emergency alert instantly notifies authorities and emergency contacts
                </p>
              </Card>
            </div>

            <Card className="p-6 sm:p-8 rounded-2xl shadow-sm bg-accent/5 border-accent/20">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="mb-2 font-semibold">Safety Education & Support</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    We provide comprehensive safety tips and dedicated support channels for women passengers. Our
                    commitment is to ensure every journey feels secure and comfortable.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                      <Phone className="mr-2 h-4 w-4" />
                      24/7 Women's Helpline
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                      Safety Tips
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
