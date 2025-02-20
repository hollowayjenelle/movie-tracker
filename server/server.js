import express from "express";
import cors from "cors";
import { connectDB } from "./service/connectDB.js";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

const startServer = () => {
  connectDB();
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Your app is listening on port ${process.env.PORT}`);
  });
};

startServer();
