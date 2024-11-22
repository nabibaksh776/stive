'use client';

import { configureStore } from '@reduxjs/toolkit';
import ChatBotSlice from './Chat/Slice';

// Define the store
export const store = configureStore({
  reducer: {
    ChatBot: ChatBotSlice, // Renamed for clarity
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Default export for convenience
export default store;
