import express from "express";
import cors from "cors";
import db from "./configs/mysql-connect.js";
import { config } from "dotenv";
import userRouter from "./routes/userRouter.js";
import bodyParser from "body-parser";
import roleRouter from "./routes/roleRouter.js";
import heroRouter from "./routes/heroRouter.js";
import resultBattleRouter from "./routes/resultBattleRouter.js";
config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/roles", roleRouter);
app.use("/api/v1/heroes", heroRouter);
app.use("/api/v1/results", resultBattleRouter);

app.listen(port, () => {
  console.log(`Server Running in http://localhost:${2003}/api/v1`);
  db.connect((err) => {
    if (err) throw err;
    console.log("Database Connected");
  });
});
