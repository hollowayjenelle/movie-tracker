import express from "express";
import { getAllMoviesByActor } from "../controllers/actorsController.js";

const actorsRouter = express.Router();

actorsRouter.get("/", getAllMoviesByActor);

export default actorsRouter;
