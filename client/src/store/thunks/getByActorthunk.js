import { createAsyncThunk } from "@reduxjs/toolkit";
import { findByActor } from "../../services/actors.service";

export const getByActor = createAsyncThunk("/movies/actor", async (name) => {
  const response = await findByActor(name);
  return response.data;
});
