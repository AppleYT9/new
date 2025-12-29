"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DollarSign, Star, TrendingUp, Award, MapPin, Clock, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function DriverDashboard() {
  const stats = {
    todayEarnings: 245.5,
    weeklyEarnings: 1234.0,
    ridesCompleted: 47,
    rating: 4.9,
    certificationProgress: 75,
  }

  const recentRides = [
    { id: 1, pickup: "Downtown Medical Center", dropoff: "Maple Street", fare: 32.5, status: "completed" },
    { id: 2, pickup: "Oak Avenue", dropoff: "Senior Care Facility", fare: 28.0, status: "completed" },
    { id: 3, pickup: "City Park", dropoff: "Shopping Mall", fare: 19.5, status: "completed" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-xl font-semibold">
                AccessRide Driver
              </Link>
              <Badge className="bg-primary text-primary-foreground">Active</Badge>
            </div>
            <Button size="sm" className="rounded-xl">
              Go Online
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold text-balance">Welcome Back, John!</h1>
            <p className="text-muted-foreground">Here's your performance overview</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Today's Earnings</p>
                  <p className="text-2xl font-bold">${stats.todayEarnings.toFixed(2)}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">This Week</p>
                  <p className="text-2xl font-bold">${stats.weeklyEarnings.toFixed(2)}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Rides Completed</p>
                  <p className="text-2xl font-bold">{stats.ridesCompleted}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Driver Rating</p>
                  <p className="text-2xl font-bold">{stats.rating}</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 mb-8">
            <Card className="lg:col-span-2 p-6 rounded-2xl shadow-sm">
              <h2 className="mb-4 text-xl font-bold">Recent Rides</h2>
              <div className="space-y-3">
                {recentRides.map((ride) => (
                  <div
                    key={ride.id}
                    className="rounded-xl border border-border p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{ride.pickup}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{ride.dropoff}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">${ride.fare.toFixed(2)}</p>
                        <Badge variant="secondary" className="mt-1">
                          {ride.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 rounded-2xl shadow-sm">
              <h2 className="mb-4 text-xl font-bold flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Training Progress
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Certification</span>
                    <span className="font-medium">{stats.certificationProgress}%</span>
                  </div>
                  <Progress value={stats.certificationProgress} className="h-2" />
                </div>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Basic Accessibility Training</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Safety Protocols</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Wheelchair Equipment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Advanced Certification (In Progress)</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4 rounded-xl bg-transparent">
                  Continue Training
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
