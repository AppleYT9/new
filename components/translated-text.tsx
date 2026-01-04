"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "@/lib/translation-context"

interface TranslatedTextProps {
    text: string
    className?: string
}

export function TranslatedText({ text, className }: TranslatedTextProps) {
    const { translate, currentLanguage } = useTranslation()
    const [translatedText, setTranslatedText] = useState(text)

    useEffect(() => {
        let mounted = true

        if (currentLanguage === 'en') {
            setTranslatedText(text)
            return
        }

        const performTranslation = async () => {
            try {
                const result = await translate(text)
                if (mounted) {
                    setTranslatedText(result)
                }
            } catch (error) {
                console.error("Translation error:", error)
            }
        }

        performTranslation()

        return () => {
            mounted = false
        }
    }, [text, translate, currentLanguage])

    return <span className={className}>{translatedText}</span>
}
