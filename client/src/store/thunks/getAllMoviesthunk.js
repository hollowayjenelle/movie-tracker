import { getAll } from "../../services/movies.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllMovies = createAsyncThunk("/movies/getAll", async () => {
  const response = await getAll();
  return response.data;
});
