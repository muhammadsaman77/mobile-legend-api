import express from "express";
import cors from "cors";
import connection from "./configs/mysql-connect.js";
import { config } from "dotenv";
config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use("/api/v1", (req, res) => {
  res.send("anja");
});
app.listen(port, () => {
  console.log(`Server Running in http://localhost:${2003}`);
  connection.connect((err) => {
    if (err) throw err;
    console.log("Database Connected");
  });
});
