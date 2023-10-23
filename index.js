import express from "express";
import cors from "cors";
import connection from "./configs/mysql-connect.js";
import { config } from "dotenv";
import userRouter from "./routes/user.js";
import bodyParser from "body-parser";
config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/users", userRouter);
app.listen(port, () => {
  console.log(`Server Running in http://localhost:${2003}/api/v1`);
  connection.connect((err) => {
    if (err) throw err;
    console.log("Database Connected");
  });
});
