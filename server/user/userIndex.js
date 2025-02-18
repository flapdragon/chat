import { Router } from "express"
import passport from "passport"
import userCreate from "./userCreate.js"

const userRouter = Router()

userRouter.post("/", passport.authenticate("jwt", { session: false }), userCreate)

export default userRouter