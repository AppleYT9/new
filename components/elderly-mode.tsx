"use client"
import { TranslatedText } from "@/components/translated-text"

export default function ElderlyMode() {
    return (
        <div className="container py-8">
            <h1><TranslatedText text="Elderly Mode" /></h1>
            <p><TranslatedText text="Content to be restored." /></p>
        </div>
    )
}
