import express from "express";
import cors from "cors";
import { connectDB } from "./service/connectDB.js";
import "dotenv/config";
import moviesRouter from "./router/movies.js";
import actorsRouter from "./router/actors.js";
import genresRouter from "./router/genres.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/movies", moviesRouter);
app.use("/api/actors", actorsRouter);
app.use("/api/genres", genresRouter);

const startServer = () => {
  connectDB();
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Your app is listening on port ${process.env.PORT}`);
  });
};

startServer();
