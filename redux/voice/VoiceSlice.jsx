import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getVoicesElevenLab, generateVoice } from './VoiceService'

const initialState = {
  voices: [],
  voiceData: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
  generatedVoiceData: {
    loading: false,
    error: null,
    isError: false,
    data: null,
    isSuccess: false
  }
}

// gell all voices
export const getVoices = createAsyncThunk('voice/getVoices', async () => {
  try {
    const voiceData = await getVoicesElevenLab()

    return voiceData
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.response?.data?.message)
  }
})

// voice slices
export const voiceSlice = createSlice({
  name: 'voice',
  initialState,
  reducers: {
    RESET_VOCICE_DATA(state) {
      state.voices = []
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.generatedVoiceData = {
        loading: false,
        error: null,
        isError: false,
        data: null,
        isSuccess: false
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getVoices.pending, state => {
        state.isLoading = true
      })
      .addCase(getVoices.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        ;(state.voices = action.payload?.voices),
          (state.voiceData = action.payload?.voices?.map(item => ({ ...item, id: item.voice_id })))
      })
      .addCase(getVoices.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.voices = []
      })

      // voice generating slice

      .addCase(generateVoice.pending, (state, action) => {
        state.generatedVoiceData = {
          loading: true,
          error: null,
          isError: false,
          data: null,
          isSuccess: false
        }
      })
      .addCase(generateVoice.fulfilled, (state, action) => {
        state.generatedVoiceData = {
          loading: false,
          error: null,
          data: action.payload,
          isError: false,
          isSuccess: true
        }
      })
      .addCase(generateVoice.rejected, (state, action) => {
        state.generatedVoiceData = {
          loading: false,
          error: action.payload,
          isError: true,
          data: null,
          isSuccess: false
        }
      })
  }
})

// Action creators are generated for each case reducer function
export const { RESET_VOCICE_DATA } = voiceSlice.actions

export default voiceSlice.reducer
