import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatBotAPI } from './Api';

// Define types for the state
interface ChatData {
  isLoading: boolean;
  error: string | null;
  message: string[]; // Update this type according to the structure of your messages
  isSuccess: boolean;
}

interface ChatBotState {
  Chat_Data: ChatData;
  Chat_Message: { type: string; data: any }[]; // Update this type based on the message structure
}

// Initial state
const initialState: ChatBotState = {
  Chat_Data: {
    isLoading: false,
    error: null,
    message: [],
    isSuccess: false,
  },
  Chat_Message: [],
};

// Create slice
export const ChatBotSlice = createSlice({
  name: 'ChatBotSlice',
  initialState,
  reducers: {
    RESET_CHAT_DATA(state) {
      state.Chat_Data = {
        isLoading: false,
        error: null,
        message: [],
        isSuccess: false,
      };
    },
    Add_NewChat(state, action: PayloadAction<{ type: string; data: any }>) {
      const { type, data } = action.payload;
      state.Chat_Message.push({ type, data });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ChatBotAPI.pending, (state) => {
        state.Chat_Data.isLoading = true;
        state.Chat_Data.error = null;
        state.Chat_Data.isSuccess = false;
      })
      .addCase(ChatBotAPI.fulfilled, (state, action) => {
        state.Chat_Data.isLoading = false;
        state.Chat_Data.error = null;
        state.Chat_Data.message = action.payload; // Assuming the payload is a string array
        state.Chat_Data.isSuccess = true;
      })
      .addCase(ChatBotAPI.rejected, (state, action) => {
        state.Chat_Data.isLoading = false;
        state.Chat_Data.error = action.payload as string; // Assuming the error is a string
        state.Chat_Data.isSuccess = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { RESET_CHAT_DATA, Add_NewChat } = ChatBotSlice.actions;

export default ChatBotSlice.reducer;
