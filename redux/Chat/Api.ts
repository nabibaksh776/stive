import { createAsyncThunk } from '@reduxjs/toolkit';

// Define the input and output types
interface QueryObject {
  user_prompt: string;
}

export const ChatBotAPI = createAsyncThunk<
  any, // Replace with the actual return type of the API if known
  QueryObject, // Type of the argument
  {
    rejectValue: string; // Type of the rejection value
  }
>('get-response', async (query, thunkAPI) => {
  try {
    console.log('this is query after submit---', query);
    let api_url = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log('this is api base url--', api_url);

    const response = await fetch(`${api_url}/get-response`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query), // Ensure `query` is converted to JSON
    });

    if (response.ok) {
      const data = await response.json();
      return data; // Replace with the actual data shape if known
    } else {
      let message = 'Something went wrong try later.';
      return thunkAPI.rejectWithValue(message);
    }
  } catch (error: any) {
    console.error('Error generating voice:', error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
