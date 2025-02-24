import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchedMovies: JSON.parse(localStorage.getItem("watchedMovies")) || [],
};
export const watchedMoviesSlice = createSlice({
  name: "watchedMovies",
  initialState,
  reducers: {
    addToWatched: (state, action) => {
      state.watchedMovies.push(action.payload);
      localStorage.setItem(
        "watchedMovies",
        JSON.stringify(state.watchedMovies)
      );
    },
  },
});

export const { addToWatched } = watchedMoviesSlice.actions;
export default watchedMoviesSlice.reducer;
