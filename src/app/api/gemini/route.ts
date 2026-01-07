import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json()

    // Check if API key is available
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      )
    }

    // Call Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${context}\n\nUser message: ${message}\n\nPlease provide a helpful, engaging response as Voyaj AI travel assistant. Keep it concise (2-3 sentences max) and travel-focused.`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 200,
          },
        }),
      }
    )

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`)
    }

    const data = await response.json()
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
      "I'm here to help you plan your perfect trip! What would you like to know?"

    return NextResponse.json({ response: aiResponse })
  } catch (error) {
    console.error('Gemini API error:', error)
    return NextResponse.json(
      { 
        response: "I'm experiencing some technical difficulties, but I'm still here to help! Let me connect you with our travel specialists." 
      },
      { status: 200 } // Return 200 to provide fallback response
    )
  }
}