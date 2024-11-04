//@deno-types="npm:@types/express"

import { Router } from "npm:express";

import retriveUserRoute from "./retrive.ts";
import createUserRoute from "./create.ts";
import deleteUserRoute from "./delete.ts";
import updateUserRoute from "./update.ts";


export const userRouter = Router()

userRouter.get("/retrive", retriveUserRoute)
userRouter.post("/create", createUserRoute)
userRouter.delete("/delete", deleteUserRoute)
userRouter.patch("/update", updateUserRoute)
