"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, CheckCircle2, Clock, DollarSign, Award, Users } from "lucide-react"
import Link from "next/link"

export function DriverPortal() {
  const [showRegistration, setShowRegistration] = useState(false)

  if (showRegistration) {
    return <DriverRegistrationForm />
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-semibold">
              AccessRide for Drivers
            </Link>
            <Button variant="outline" size="sm" asChild className="rounded-xl bg-transparent">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-balance sm:text-5xl">Drive. Earn. Make a Difference.</h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed">
              Join our network of verified accessibility drivers and help people with mobility needs get where they need
              to go
            </p>
            <Button size="lg" className="mt-8 h-14 px-8 text-lg rounded-xl" onClick={() => setShowRegistration(true)}>
              Register as WAV Driver
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <Card className="p-6 rounded-2xl shadow-sm border border-border text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <DollarSign className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Competitive Earnings</h3>
              <p className="text-muted-foreground leading-relaxed">Earn more with premium accessibility rides</p>
            </Card>

            <Card className="p-6 rounded-2xl shadow-sm border border-border text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Flexible Schedule</h3>
              <p className="text-muted-foreground leading-relaxed">Drive on your own time, whenever works for you</p>
            </Card>

            <Card className="p-6 rounded-2xl shadow-sm border border-border text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Make an Impact</h3>
              <p className="text-muted-foreground leading-relaxed">Help people with accessibility needs thrive</p>
            </Card>
          </div>

          <Card className="p-8 rounded-2xl shadow-sm mb-12">
            <h2 className="mb-6 text-3xl font-bold text-balance">Requirements</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Wheelchair-Accessible Vehicle</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Must have a WAV with working ramp or lift
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Valid Driver's License</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Clean driving record required</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Background Check</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Comprehensive verification process</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Insurance Coverage</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Valid commercial vehicle insurance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Accessibility Training</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Complete our certification program</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Vehicle Inspection</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Ramp verification and safety check</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 rounded-2xl shadow-sm bg-primary/5 border-primary/20">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-balance">Ready to Get Started?</h2>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                Join thousands of drivers making accessibility rides possible
              </p>
              <Button size="lg" className="h-14 px-8 text-lg rounded-xl" onClick={() => setShowRegistration(true)}>
                Start Your Application
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}

function DriverRegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    licenseNumber: "",
    vehicleType: "",
    vehiclePlate: "",
    insuranceNumber: "",
    additionalInfo: "",
    agreeTerms: false,
    agreeTraining: false,
  })

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-semibold">
              Driver Registration
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-3xl font-bold text-balance">Join Our Driver Network</h1>
            <p className="text-muted-foreground leading-relaxed">Complete the form below to start your application</p>
          </div>

          <Card className="p-6 sm:p-8 rounded-2xl shadow-sm">
            <form className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Personal Information</h2>

                <div>
                  <Label htmlFor="fullName" className="mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    className="h-11 rounded-xl"
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="email" className="mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="h-11 rounded-xl"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="mb-2 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="h-11 rounded-xl"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold">Driver Information</h2>

                <div>
                  <Label htmlFor="licenseNumber" className="mb-2 block">
                    Driver's License Number *
                  </Label>
                  <Input
                    id="licenseNumber"
                    placeholder="Enter license number"
                    value={formData.licenseNumber}
                    onChange={(e) => updateField("licenseNumber", e.target.value)}
                    className="h-11 rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold">Vehicle Information</h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="vehicleType" className="mb-2 block">
                      Vehicle Type *
                    </Label>
                    <Input
                      id="vehicleType"
                      placeholder="e.g., Accessible Van"
                      value={formData.vehicleType}
                      onChange={(e) => updateField("vehicleType", e.target.value)}
                      className="h-11 rounded-xl"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="vehiclePlate" className="mb-2 block">
                      License Plate *
                    </Label>
                    <Input
                      id="vehiclePlate"
                      placeholder="ABC-1234"
                      value={formData.vehiclePlate}
                      onChange={(e) => updateField("vehiclePlate", e.target.value)}
                      className="h-11 rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="insuranceNumber" className="mb-2 block">
                    Insurance Policy Number *
                  </Label>
                  <Input
                    id="insuranceNumber"
                    placeholder="Enter policy number"
                    value={formData.insuranceNumber}
                    onChange={(e) => updateField("insuranceNumber", e.target.value)}
                    className="h-11 rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold">Document Uploads</h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border-2 border-dashed border-border p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm font-medium mb-1">Driver's License</p>
                    <p className="text-xs text-muted-foreground">Click to upload</p>
                  </div>

                  <div className="rounded-xl border-2 border-dashed border-border p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm font-medium mb-1">Insurance Documents</p>
                    <p className="text-xs text-muted-foreground">Click to upload</p>
                  </div>

                  <div className="rounded-xl border-2 border-dashed border-border p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm font-medium mb-1">Vehicle Registration</p>
                    <p className="text-xs text-muted-foreground">Click to upload</p>
                  </div>

                  <div className="rounded-xl border-2 border-dashed border-border p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm font-medium mb-1">Ramp Verification Photos</p>
                    <p className="text-xs text-muted-foreground">Click to upload</p>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="additionalInfo" className="mb-2 block">
                  Additional Information (Optional)
                </Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Tell us more about your experience or vehicle"
                  value={formData.additionalInfo}
                  onChange={(e) => updateField("additionalInfo", e.target.value)}
                  className="min-h-24 rounded-xl"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-xl bg-muted p-4">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => updateField("agreeTerms", checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="agreeTerms" className="cursor-pointer text-sm leading-relaxed">
                    I agree to the terms and conditions and understand that background checks will be conducted
                  </Label>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-muted p-4">
                  <Checkbox
                    id="agreeTraining"
                    checked={formData.agreeTraining}
                    onCheckedChange={(checked) => updateField("agreeTraining", checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="agreeTraining" className="cursor-pointer text-sm leading-relaxed">
                    I commit to completing the accessibility training and certification program
                  </Label>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full h-12 rounded-xl">
                Submit Application
              </Button>
            </form>
          </Card>

          <Card className="mt-6 p-6 rounded-2xl shadow-sm bg-primary/5 border-primary/20">
            <h3 className="mb-3 font-semibold flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              What Happens Next?
            </h3>
            <ol className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <li className="flex gap-2">
                <span className="font-semibold text-foreground">1.</span>
                <span>Application review (1-2 business days)</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-foreground">2.</span>
                <span>Background check and vehicle verification</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-foreground">3.</span>
                <span>Complete accessibility training program</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-foreground">4.</span>
                <span>Start accepting rides and earning!</span>
              </li>
            </ol>
          </Card>
        </div>
      </main>
    </div>
  )
}
