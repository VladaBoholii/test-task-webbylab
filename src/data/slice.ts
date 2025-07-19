import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { movies: any[] } = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setFetched: (state, action: PayloadAction<any[]>) => {
      state.movies = action.payload;
    },
  },
});

export const { setFetched } = moviesSlice.actions;

export default moviesSlice.reducer;
