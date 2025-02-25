import moviesRouter from "./router/movies.js";
import actorsRouter from "./router/actors.js";
import genresRouter from "./router/genres.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/movies", moviesRouter);
app.use("/api/actors", actorsRouter);
app.use("/api/genres", genresRouter);

export default app;
