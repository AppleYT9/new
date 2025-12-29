"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accessibility } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function Header() {
  const { elderlyMode, toggleElderlyMode, pinkSafetyMode, togglePinkSafetyMode } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Accessibility className="h-6 w-6" />
            </div>
            <span className="text-xl font-semibold text-balance">
              AccessRide <span className="text-muted-foreground font-normal">AI</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50">
              <Label htmlFor="elderly-mode" className="text-xs font-medium cursor-pointer whitespace-nowrap">
                ELDERLY MODE
              </Label>
              <Switch id="elderly-mode" checked={elderlyMode} onCheckedChange={toggleElderlyMode} />
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50">
              <Label htmlFor="pink-safety" className="text-xs font-medium cursor-pointer whitespace-nowrap">
                PINK SAFETY
              </Label>
              <Switch id="pink-safety" checked={pinkSafetyMode} onCheckedChange={togglePinkSafetyMode} />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/book">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
