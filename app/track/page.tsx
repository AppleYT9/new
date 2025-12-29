"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function TrackPage() {
  const [rideId, setRideId] = useState("")
  const router = useRouter()

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (rideId.trim()) {
      router.push(`/track/${rideId}`)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-semibold">
              AccessRide
            </Link>
            <Button variant="outline" size="sm" asChild className="rounded-xl bg-transparent">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-3xl font-bold text-balance">Track Your Ride</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Enter your ride ID to view live tracking and driver details
            </p>
          </div>

          <Card className="p-8 rounded-2xl shadow-sm">
            <form onSubmit={handleTrack} className="space-y-6">
              <div>
                <Label htmlFor="rideId" className="text-base font-medium mb-3 block">
                  Ride ID
                </Label>
                <Input
                  id="rideId"
                  placeholder="Enter your ride ID (e.g., AR12345)"
                  value={rideId}
                  onChange={(e) => setRideId(e.target.value)}
                  className="h-12 rounded-xl"
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-12 rounded-xl">
                <Search className="mr-2 h-5 w-5" />
                Track Ride
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center mb-4">Or try a demo ride:</p>
              <Button
                variant="outline"
                size="sm"
                className="w-full rounded-xl bg-transparent"
                onClick={() => router.push("/track/DEMO123")}
              >
                View Demo Tracking
              </Button>
            </div>
          </Card>

          <Card className="mt-6 p-6 rounded-2xl shadow-sm bg-primary/5 border-primary/20">
            <h3 className="mb-3 font-semibold">Tracking Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Live GPS tracking with real-time updates</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Driver information and vehicle details</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>ETA and route information</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Direct communication with driver</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Emergency SOS button for safety</span>
              </li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  )
}
