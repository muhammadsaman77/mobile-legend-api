import { Router } from "express";
import { addNewResultBattle } from "../controllers/resultBattleController.js";

const resultBattleRouter = Router();

resultBattleRouter.post("/", addNewResultBattle);

export default resultBattleRouter;
