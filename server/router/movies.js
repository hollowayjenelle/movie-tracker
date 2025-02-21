import express from "express";
import {
  getAllMovies,
  getMovieByKeyword,
} from "../controllers/moviesController.js";

const moviesRouter = express.Router();

moviesRouter.get("/", getAllMovies);
moviesRouter.get("/movie", getMovieByKeyword);

export default moviesRouter;
