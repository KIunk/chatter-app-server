//@deno-types="npm:@types/express"

import { Router } from "npm:express";

import { userRouter } from "./users/_router.ts";

export const apiRouter =  Router()

apiRouter.use("/users", userRouter)