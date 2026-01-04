import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { TranslatedText } from "@/components/translated-text"

interface AccessibilityNeedsStepProps {
    bookingData: {
        accessibilityNeeds: string[]
    }
    updateBookingData: (data: { accessibilityNeeds: string[] }) => void
}

export function AccessibilityNeedsStep({ bookingData, updateBookingData }: AccessibilityNeedsStepProps) {
    const needs = [
        { id: "ramp", label: "Ramp Required", description: "Vehicle equipped with wheelchair ramp" },
        { id: "width", label: "Wheelchair Width Support", description: "Extra-wide wheelchair accommodation" },
        { id: "assistance", label: "Assistance Needed", description: "Driver assistance with boarding" },
        { id: "low-entry", label: "Low Height Entry", description: "Low-floor vehicle for easier access" },
        { id: "foldable", label: "Foldable Wheelchair Space", description: "Space for collapsible wheelchairs" },
    ]

    const toggleNeed = (needId: string) => {
        const currentNeeds = bookingData.accessibilityNeeds
        const newNeeds = currentNeeds.includes(needId)
            ? currentNeeds.filter((id) => id !== needId)
            : [...currentNeeds, needId]
        updateBookingData({ accessibilityNeeds: newNeeds })
    }

    return (
        <div>
            <h2 className="mb-2 text-2xl font-bold text-balance"><TranslatedText text="Accessibility Needs" /></h2>
            <p className="mb-8 text-muted-foreground leading-relaxed">
                <TranslatedText text="Select any specific requirements for your ride (optional)" />
            </p>

            <div className="space-y-4">
                {needs.map((need) => (
                    <div
                        key={need.id}
                        className="rounded-xl border border-border bg-card p-4 hover:bg-accent/5 transition-colors"
                    >
                        <div className="flex items-start gap-3">
                            <Checkbox
                                id={need.id}
                                checked={bookingData.accessibilityNeeds.includes(need.id)}
                                onCheckedChange={() => toggleNeed(need.id)}
                                className="mt-1"
                            />
                            <div className="flex-1">
                                <Label htmlFor={need.id} className="font-medium cursor-pointer">
                                    <TranslatedText text={need.label} />
                                </Label>
                                <p className="text-sm text-muted-foreground mt-1"><TranslatedText text={need.description} /></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 rounded-xl bg-primary/5 p-4 border border-primary/20">
                <p className="text-sm text-foreground">
                    <span className="font-medium"><TranslatedText text="AI Matching" />:</span>{" "}
                    <TranslatedText text="Our system will automatically match you with the most suitable vehicle based on your selections" />
                </p>
            </div>
        </div>
    )
}
