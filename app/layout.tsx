import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

import { ThemeProvider } from "@/lib/theme-context"
import { TranslationProvider } from "@/lib/translation-context"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Safe Go - AI-Powered Accessibility Ride Booking",
  description:
    "Wheelchair-accessible rides, elderly mode, and women's safety. Book verified WAV rides with AI-powered matching.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={`${plusJakartaSans.className} antialiased`}>
        <TranslationProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </TranslationProvider>

      </body>
    </html>
  )
}

