import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { movies: any[]; total: number } = {
  movies: [],
  total: 0,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setFetched: (state, action: PayloadAction<any[]>) => {
      state.movies = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },

    append: (state, action: PayloadAction<any[]>) => {
      state.movies = [...state.movies, ...action.payload];
    },
  },
});

export const { setFetched, setTotal, append } = moviesSlice.actions;

export default moviesSlice.reducer;
