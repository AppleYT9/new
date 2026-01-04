"use client"

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'

export type Language = 'en' | 'hi' | 'te' | 'kn' | 'ta' | 'ml'

interface TranslationContextType {
  currentLanguage: Language
  setLanguage: (language: Language) => void
  translate: (text: string) => Promise<string>
  isTranslating: boolean
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

const languages = {
  en: 'English',
  hi: 'हिन्दी',
  te: 'తెలుగు',
  kn: 'ಕನ್ನಡ',
  ta: 'தமிழ்',
  ml: 'മലയാളം'
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en')
  const [isTranslating, setIsTranslating] = useState(false)
  const [translations, setTranslations] = useState<Record<string, string>>({})

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && languages[savedLanguage]) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const setLanguage = useCallback((language: Language) => {
    setCurrentLanguage(language)
    localStorage.setItem('language', language)
  }, [])

  const translate = useCallback(async (text: string): Promise<string> => {
    if (currentLanguage === 'en') return text

    const cacheKey = `${text}-${currentLanguage}`
    if (translations[cacheKey]) {
      return translations[cacheKey]
    }

    setIsTranslating(true)
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          targetLanguage: currentLanguage,
        }),
      })

      if (!response.ok) {
        throw new Error('Translation failed')
      }

      const data = await response.json()
      const translatedText = data.translatedText

      setTranslations(prev => ({
        ...prev,
        [cacheKey]: translatedText
      }))

      return translatedText
    } catch (error) {
      console.error('Translation error:', error)
      return text // Return original text if translation fails
    } finally {
      setIsTranslating(false)
    }
  }, [currentLanguage, translations])

  return (
    <TranslationContext.Provider value={{
      currentLanguage,
      setLanguage,
      translate,
      isTranslating
    }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}
