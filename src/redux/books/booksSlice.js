import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiURLlink = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dOPykxyC5CzkaikEhUxg';

export const AddBook = createAsyncThunk('addbook', async (book) => {
  try {
    const response = await axios.post(`${apiURLlink}/books`, book);
    return response.data;
  } catch {
    throw new Error('failed to post object');
  }
});

export const fetchBook = createAsyncThunk('fetchbook', async () => {
  const response = await axios.get(`${apiURLlink}/books`);
  const books = Object.entries(response.data).map((item) => (
    {
      ...item[1][0],
      item_id: item[0],
    }
  ));
  return books;
});

export const deleteBook = createAsyncThunk('deletebooks', async (id) => {
  await axios.delete(`${apiURLlink}/books/${id}`);
  return id;
});

const initialState = {
  books: [],
  isLoading: false,
  isError: undefined,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(AddBook.fulfilled, (state, action) => {
      state.books.push(action.payload);
    });

    builder.addCase(deleteBook.fulfilled, (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload),
    }));

    builder.addCase(fetchBook.pending, (state) => ({
      ...state,
      isLoading: true,
    }));

    builder.addCase(fetchBook.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      books: action.payload,
    }));

    builder.addCase(fetchBook.rejected, (state) => ({
      ...state,
      isLoading: false,
      isError: true,
    }));
  },
});

export default booksSlice.reducer;
