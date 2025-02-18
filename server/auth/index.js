import { Router } from "express"
import passport from "passport"
import authLogin from "./login.js"
import status from "./status.js"
import logout from "./logout.js"

const authRouter = Router()

authRouter.post("/login", passport.authenticate("local"), authLogin)
authRouter.get("/status", passport.authenticate("jwt", { session: false }), status)
authRouter.post("/logout", passport.authenticate("jwt", { session: false }), logout)

export default authRouter