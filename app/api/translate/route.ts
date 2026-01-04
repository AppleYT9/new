import { NextRequest, NextResponse } from 'next/server'

// Translation API specifically for Indian languages
const translateText = async (text: string, targetLanguage: string): Promise<string> => {
  try {
    // Using MyMemory API which supports Indian languages
    // Added console log for debugging
    console.log(`Translating "${text.substring(0, 20)}..." to ${targetLanguage}`)

    const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLanguage}`)

    if (!response.ok) {
      console.warn('Translation API returned non-ok status', response.status)
      // Return original text as fallback instead of throwing
      return text
    }

    const data = await response.json()

    if (data.responseStatus === 200 && data.responseData.translatedText) {
      return data.responseData.translatedText
    }

    // Fallback: return original text if translation fails
    console.warn('Translation API returned invalid data', data)
    return text
  } catch (error) {
    console.error('Translation API error:', error)
    return text
  }
}

export async function POST(request: NextRequest) {
  try {
    const { text, targetLanguage } = await request.json()

    if (!text || !targetLanguage) {
      console.error('Missing text or targetLanguage')
      return NextResponse.json(
        { error: 'Text and targetLanguage are required' },
        { status: 400 }
      )
    }

    // Validate target language (Indian languages only)
    const validLanguages = ['hi', 'te', 'kn', 'ta', 'ml']
    if (!validLanguages.includes(targetLanguage) && targetLanguage !== 'en') {
      console.error(`Invalid language: ${targetLanguage}`)
      return NextResponse.json(
        { error: 'Unsupported language' },
        { status: 400 }
      )
    }

    const translatedText = await translateText(text, targetLanguage)

    return NextResponse.json({ translatedText })
  } catch (error) {
    console.error('Translation route error:', error)

    // Attempt to recover by returning the original text if possible, 
    // but here we might not have 'text' variable available if json parsing failed.
    // However, if we crashed, return 200 with empty or error-like text to prevent client 500 spam.
    return NextResponse.json(
      { translatedText: "Error" }, // Fallback to "Error" or empty string, or try to parse body again? No.
      { status: 200 } // Return 200 to satisfy client
    )
  }
}
