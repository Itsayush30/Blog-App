import express from "express";
import cors from "cors"; 
import connect from "./config/database.js";
import bodyParser from "body-parser";

import apiRoutes from "./routes/index.js";

const app = express();

app.use(cors()); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(3002, async () => {
  console.log("Server started at 3002");
  await connect();
  console.log("Mongo db connected");
});
