import { createAsyncThunk } from "@reduxjs/toolkit";
import { findByTitle } from "../../services/movies.service";

export const getByTitle = createAsyncThunk("/movies/title", async (title) => {
  const response = await findByTitle(title);
  return response.data;
});
