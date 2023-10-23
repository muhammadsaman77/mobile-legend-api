import { Router } from "express";
import { addNewRole, getAllRole } from "../controllers/roleController.js";

const roleRouter = Router();

roleRouter.get("/", getAllRole);
roleRouter.post("/", addNewRole);
export default roleRouter;
