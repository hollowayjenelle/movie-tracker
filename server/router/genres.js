import express from "express";
import getAllMoviesByGenre from "../controllers/genresController.js";

const genresRouter = express.Router();

genresRouter.get("/", getAllMoviesByGenre);

export default genresRouter;
