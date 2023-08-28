import { configureStore } from '@reduxjs/toolkit';
import booksSlicereducer from './books/booksSlice';
import categorySlicereducer from './categories/categorySlice';

const store = configureStore({
  reducer: {
    books: booksSlicereducer,
    categories: categorySlicereducer,
  },
});
export default store;
