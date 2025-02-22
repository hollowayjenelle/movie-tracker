import express from "express";
import { getAllMovies } from "../controllers/moviesController.js";

const moviesRouter = express.Router();

moviesRouter.get("/", getAllMovies);

export default moviesRouter;
