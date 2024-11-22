import { createAsyncThunk } from '@reduxjs/toolkit'
import { ElevenLabsClient, ElevenLabs } from 'elevenlabs'

// get all voices
export const getVoicesElevenLab = async () => {
  try {
    console.log('this vaices api_key ', process.env.NEXT_PUBLIC_ELEVEN_LABS)
    const client = new ElevenLabsClient({ apiKey: process.env.NEXT_PUBLIC_ELEVEN_LABS })
    const response = await client.voices.getAll()
    return response
  } catch (error) {
    return error
  }
}

export const generateVoice = createAsyncThunk('voice/generate', async ({ voice_id, text, language,stability,similarity_boost }, thunkAPI) => {
  console.log("🚀 ~ generateVoice ~ language:", language)
  try {
    const response = await fetch('/api/generateVoice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model_id: "eleven_turbo_v2_5",
        voice_id: voice_id,
        text: text,
        language_code : language,
        stability: stability,
        similarity_boost:similarity_boost
      })
    })
    console.log('response----')
    if (response.status == 200) {
      const audioBlob = await response.blob()
      const url = URL.createObjectURL(audioBlob)
      return url
    } else {
      let message = 'voice not generated'
      return thunkAPI.rejectWithValue(message)
    }
  } catch (error) {
    console.error('Error generating voice:', error)
    return thunkAPI.rejectWithValue(error.message)
  }
})
