import app from "./app.js";
import { connectDB } from "./service/connectDB.js";
import "dotenv/config";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const startServer = () => {
  connectDB();
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Your app is listening on port ${process.env.PORT}`);
  });
};

startServer();
