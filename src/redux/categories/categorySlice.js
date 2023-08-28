import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: [],
};
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state, action) => ({
      ...state,
      category: action.payload === 'Under Construction'
        ? 'Under Construction'
        : state.category,
    }),
  },
});

export default categorySlice.reducer;
