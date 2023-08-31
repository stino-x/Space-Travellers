import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiURLlink = 'https://api.spacexdata.com/v3';

// export const AddBook = createAsyncThunk('addbook', async (book) => {
//   try {
//     const response = await axios.post(`${apiURLlink}/books`, book);
//     return response.data;
//   } catch {
//     throw new Error('failed to post object');
//   }
// });

export const fetchMission = createAsyncThunk('fetchMission', async () => {
  const response = await axios.get(`${apiURLlink}/missions`);
  const reserved = 'reserved';
  const missions = response.data;
  missions.map((mission) => (
    {
      ...mission,
      [reserved]: false,
    }
  ));
  return missions;
});

// export const deleteBook = createAsyncThunk('deletebooks', async (id) => {
//   await axios.delete(`${apiURLlink}/books/${id}`);
//   return id;
// });

const initialState = {
  missions: [],
  isLoading: false,
  isError: undefined,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.missions = state.missions.map((rocket) => {
        if (action.payload.id === rocket.mission_id) {
          return { ...rocket, reserved: !rocket.reserved };
        }
        return rocket;
      });
    },
  },

  extraReducers: (builder) => {
    // builder.addCase(AddBook.fulfilled, (state, action) => {
    //   state.missions.push(action.payload);
    // });

    // builder.addCase(deleteBook.fulfilled, (state, action) => ({
    //   ...state,
    //   missions: state.missions.filter((book) => book.item_id !== action.payload),
    // }));

    builder.addCase(fetchMission.pending, (state) => ({
      ...state,
      isLoading: true,
    }));

    builder.addCase(fetchMission.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      missions: action.payload,
    }));

    builder.addCase(fetchMission.rejected, (state) => ({
      ...state,
      isLoading: false,
      isError: true,
    }));
  },
});

export default missionsSlice.reducer;
export const { changeStatus } = missionsSlice.actions;
