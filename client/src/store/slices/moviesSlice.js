import { createSlice } from "@reduxjs/toolkit";
import { getAll, findByTitle } from "../../services/movies.service";
import { findByActor } from "../../services/actors.service";
import { findByGenre } from "../../services/genres.service";

const initialState = {
  allMovies: getAll().then((response) => {
    return response.data;
  }),
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getAllMovies: () => {
      getAll().then((response) => {
        state.allMovies = response.data;
      });
    },
    getByActor: (state, action) => {
      findByActor(action.payload).then((response) => {
        const data = response.data;
        let movies = [];
        data.forEach((actor) => {
          movies = movies.concat(actor.movies);
        });
        state.allMovies = movies;
      });
    },
    getByGenre: (state, action) => {
      findByGenre(action.payload).then((response) => {
        state.allMovies = response.data[0].movies;
      });
    },
    getByMovieTitle: (state, action) => {
      findByTitle(action.payload).then((response) => {
        state.allMovies = response.data;
      });
    },
  },
});

export const { getAllMovies, getByActor, getByGenre, getByMovieTitle } =
  moviesSlice.actions;

export default moviesSlice.reducer;
