"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { StepIndicator } from "@/components/step-indicator"
import { RideCategoryStep } from "@/components/booking-steps/ride-category-step"
import { AccessibilityNeedsStep } from "@/components/booking-steps/accessibility-needs-step"
import { LocationStep } from "@/components/booking-steps/location-step"
import { SafetyPreferencesStep } from "@/components/booking-steps/safety-preferences-step"
import { RideSummaryStep } from "@/components/booking-steps/ride-summary-step"

export function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    rideCategory: "",
    accessibilityNeeds: [] as string[],
    pickupAddress: "",
    dropoffAddress: "",
    safetyPreferences: [] as string[],
  })

  const totalSteps = 5

  const updateBookingData = (data: Partial<typeof bookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return bookingData.rideCategory !== ""
      case 2:
        return true // Optional step
      case 3:
        return bookingData.pickupAddress !== "" && bookingData.dropoffAddress !== ""
      case 4:
        return true // Optional step
      case 5:
        return true
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold text-balance">Book Your Accessible Ride</h1>
            <p className="text-muted-foreground">Complete the steps below to book your ride</p>
          </div>

          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

          <Card className="p-6 sm:p-8 mt-8 rounded-2xl shadow-sm">
            {currentStep === 1 && <RideCategoryStep bookingData={bookingData} updateBookingData={updateBookingData} />}
            {currentStep === 2 && (
              <AccessibilityNeedsStep bookingData={bookingData} updateBookingData={updateBookingData} />
            )}
            {currentStep === 3 && <LocationStep bookingData={bookingData} updateBookingData={updateBookingData} />}
            {currentStep === 4 && (
              <SafetyPreferencesStep bookingData={bookingData} updateBookingData={updateBookingData} />
            )}
            {currentStep === 5 && <RideSummaryStep bookingData={bookingData} />}

            <div className="mt-8 flex items-center justify-between gap-4">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="rounded-xl bg-transparent"
                size="lg"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button onClick={nextStep} disabled={!canProceed()} className="rounded-xl" size="lg">
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button className="rounded-xl" size="lg">
                  Confirm Booking
                  <Check className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
