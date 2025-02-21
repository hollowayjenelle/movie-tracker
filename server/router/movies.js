import express from "express";
import {
  getAllMovies,
  getMovieByKeyword,
} from "../controllers/moviesController";

const router = express.Router();

router.get("/", getAllMovies);
router.get("/movie", getMovieByKeyword);

export default router;
