import moviesRouter from "./router/movies.js";
import actorsRouter from "./router/actors.js";
import genresRouter from "./router/genres.js";
import express from "express";
import cors from "cors";

import { createRequire } from "module";
import path from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.use("/api/movies", moviesRouter);
app.use("/api/actors", actorsRouter);
app.use("/api/genres", genresRouter);

export default app;
