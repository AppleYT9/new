import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Shield, Users, Bell, Moon } from "lucide-react"

interface SafetyPreferencesStepProps {
  bookingData: {
    safetyPreferences: string[]
  }
  updateBookingData: (data: { safetyPreferences: string[] }) => void
}

export function SafetyPreferencesStep({ bookingData, updateBookingData }: SafetyPreferencesStepProps) {
  const preferences = [
    {
      id: "women-driver",
      label: "Women-Only Driver",
      description: "Request a female driver for your ride",
      icon: Users,
    },
    {
      id: "night-alerts",
      label: "Night Safety Alerts",
      description: "Enhanced safety notifications for night travel",
      icon: Moon,
    },
    {
      id: "trip-sharing",
      label: "Share Trip with Family",
      description: "Send real-time trip details to emergency contacts",
      icon: Bell,
    },
  ]

  const togglePreference = (prefId: string) => {
    const currentPrefs = bookingData.safetyPreferences
    const newPrefs = currentPrefs.includes(prefId)
      ? currentPrefs.filter((id) => id !== prefId)
      : [...currentPrefs, prefId]
    updateBookingData({ safetyPreferences: newPrefs })
  }

  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold text-balance">Safety Preferences</h2>
      <p className="mb-8 text-muted-foreground leading-relaxed">Customize your safety settings (optional)</p>

      <div className="space-y-4">
        {preferences.map((pref) => {
          const Icon = pref.icon
          return (
            <div
              key={pref.id}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 hover:bg-accent/5 transition-colors"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <Label htmlFor={pref.id} className="font-medium cursor-pointer">
                  {pref.label}
                </Label>
                <p className="text-sm text-muted-foreground mt-1">{pref.description}</p>
              </div>
              <Switch
                id={pref.id}
                checked={bookingData.safetyPreferences.includes(pref.id)}
                onCheckedChange={() => togglePreference(pref.id)}
              />
            </div>
          )
        })}
      </div>

      <div className="mt-6 rounded-xl bg-accent/5 p-6 border border-accent/20">
        <div className="flex items-start gap-3">
          <Shield className="h-6 w-6 text-accent shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold mb-1">Your Safety Matters</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All rides include GPS tracking, verified drivers, and 24/7 support. SOS panic button available throughout
              your journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
