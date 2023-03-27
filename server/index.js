import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import connectDB from "./mongodb/connect.js";
import PostRoutes from "./routes/postRoutes.js";
import DaleRoutes from "./routes/daleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/post", PostRoutes);
app.use("/api/v1/dalle", DaleRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("Server has started on port: 8080");
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
