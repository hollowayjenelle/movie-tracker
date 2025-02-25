import { createSlice } from "@reduxjs/toolkit";
import { getAllMovies } from "../thunks/getAllMoviesthunk";
import { getByActor } from "../thunks/getByActorthunk";
import { getByGenre } from "../thunks/getByGenrethunk";
import { getByTitle } from "../thunks/getByTitlethunk.js";

const initialState = {
  allMovies: [],
  loading: false,
  error: null,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.allMovies = action.payload;
        state.loading = false;
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getByActor.pending, (state) => {
        state.loading = true;
      })
      .addCase(getByActor.fulfilled, (state, action) => {
        const data = action.payload;
        let movies = [];
        data.forEach((actor) => {
          movies = movies.concat(actor.movies);
        });
        state.allMovies = movies;
        state.loading = false;
      })
      .addCase(getByActor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getByGenre.pending, (state) => {
        state.loading = true;
      })
      .addCase(getByGenre.fulfilled, (state, action) => {
        state.allMovies = action.payload;
        state.loading = false;
      })
      .addCase(getByGenre.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getByTitle.pending, (state) => {
        state.loading = true;
      })
      .addCase(getByTitle.fulfilled, (state, action) => {
        state.allMovies = action.payload;
        state.loading = false;
      })
      .addCase(getByTitle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
