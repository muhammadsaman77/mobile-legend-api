import { Router } from "express";
import { addNewHero } from "../controllers/heroController.js";

const heroRouter = Router();

heroRouter.post("/", addNewHero);

export default heroRouter;
