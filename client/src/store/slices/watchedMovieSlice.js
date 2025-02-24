import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: JSON.parse(localStorage.getItem("watchedMovies")) || [],
};
export const watchedMoviesSlice = createSlice({
  name: "watchedMovies",
  initialState,
  reducers: {
    addToWatched: (state, action) => {
      const hasWatched = state.movies.find(
        (movie) => movie.title === action.payload.title
      );
      if (!hasWatched) {
        state.movies.push(action.payload);
        localStorage.setItem("watchedMovies", JSON.stringify(state.movies));
      }
    },
  },
});

export const { addToWatched } = watchedMoviesSlice.actions;
export default watchedMoviesSlice.reducer;
