import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, User, Shield, Sparkles, Clock, DollarSign } from "lucide-react"

interface RideSummaryStepProps {
  bookingData: {
    rideCategory: string
    accessibilityNeeds: string[]
    pickupAddress: string
    dropoffAddress: string
    safetyPreferences: string[]
  }
}

export function RideSummaryStep({ bookingData }: RideSummaryStepProps) {
  const rideCategoryLabels: Record<string, string> = {
    wav: "Wheelchair-Accessible Ride",
    elderly: "Elderly Mode Ride",
    women: "Women-Only Ride",
    standard: "Standard Ride",
  }

  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold text-balance">Ride Summary</h2>
      <p className="mb-8 text-muted-foreground leading-relaxed">Review your booking details before confirming</p>

      <div className="space-y-6">
        <div className="rounded-xl bg-primary/5 p-6 border border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">AI-Matched for Your Needs</span>
          </div>
          <p className="text-sm text-foreground">
            Your ride has been intelligently matched with the best available driver and vehicle
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Ride Category
          </h3>
          <p className="text-foreground">{rideCategoryLabels[bookingData.rideCategory] || "Not selected"}</p>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Journey Details
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Pickup</p>
              <p className="text-foreground">{bookingData.pickupAddress || "Not specified"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Drop-off</p>
              <p className="text-foreground">{bookingData.dropoffAddress || "Not specified"}</p>
            </div>
          </div>
        </div>

        {bookingData.accessibilityNeeds.length > 0 && (
          <>
            <Separator />
            <div>
              <h3 className="font-semibold mb-3">Accessibility Requirements</h3>
              <div className="flex flex-wrap gap-2">
                {bookingData.accessibilityNeeds.map((need) => (
                  <Badge key={need} variant="secondary" className="rounded-full">
                    {need.replace("-", " ")}
                  </Badge>
                ))}
              </div>
            </div>
          </>
        )}

        {bookingData.safetyPreferences.length > 0 && (
          <>
            <Separator />
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Safety Preferences
              </h3>
              <div className="flex flex-wrap gap-2">
                {bookingData.safetyPreferences.map((pref) => (
                  <Badge key={pref} variant="secondary" className="rounded-full">
                    {pref.replace("-", " ")}
                  </Badge>
                ))}
              </div>
            </div>
          </>
        )}

        <Separator />

        <div className="rounded-xl bg-card border border-border p-6">
          <h3 className="font-semibold mb-4">Estimated Details</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Estimated Time</span>
              </div>
              <span className="font-medium">15-20 minutes</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign className="h-4 w-4" />
                <span>Estimated Fare</span>
              </div>
              <span className="font-medium">$25.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
