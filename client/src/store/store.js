import { configureStore } from "@reduxjs/toolkit";
import watchedMoviesReducer from "../store/slices/watchedMovieSlice";

export const store = configureStore({
  reducer: {
    watchedMovies: watchedMoviesReducer,
  },
});
