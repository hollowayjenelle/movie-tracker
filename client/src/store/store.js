import { configureStore } from "@reduxjs/toolkit";
import watchedMoviesReducer from "../store/slices/watchedMovieSlice.js";
import moviesReducer from "../store/slices/moviesSlice.js";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    watchedMovies: watchedMoviesReducer,
  },
});
