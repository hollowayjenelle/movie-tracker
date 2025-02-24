import { createAsyncThunk } from "@reduxjs/toolkit";
import { findByGenre } from "../../services/genres.service";

export const getByGenre = createAsyncThunk("/movies/genre", async (genre) => {
  const response = await findByGenre(genre);
  return response.data[0].movies;
});
