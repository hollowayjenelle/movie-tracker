import express from "express";
import {
  getAllMovies,
  getMovieByKeyword,
} from "../controllers/moviesController";

const router = express.Router();

router.get("/getAllMovies", getAllMovies);
router.get("/getMovieByKeyword", getMovieByKeyword);

export default router;
