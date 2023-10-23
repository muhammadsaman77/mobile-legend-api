import { Router } from "express";
import {
  addNewUser,
  deleteUserByName,
  editUsername,
  getAllUsers,
} from "../controllers/user.js";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", addNewUser);
userRouter.put("/", editUsername);
userRouter.delete("/", deleteUserByName);

export default userRouter;
