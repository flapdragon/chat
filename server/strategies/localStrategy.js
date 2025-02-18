import passport from "passport"
import { Strategy } from "passport-local"
import * as argon2 from "argon2"
import userModel from "../user/userModel.js"

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const findUser = await userModel.findOne({ _id: id })
    if (!findUser) {
      throw new Error("Invalid credentials")
    }
    done(null, findUser)
  }
  catch (err) {
    done(err, null)
  }
})

export default passport.use(
  new Strategy({ usernameField: "email" }, async (username, password, done) => {
    try {
      console.log("local strategy", username, password)
      const user = await userModel.findOne({ email: username })
      const isPasswordCorrect = await argon2.verify(user.password, password)
      console.log("user", user)
      if (!user) {
        throw new Error("Invalid credentials")
      }
      if (!isPasswordCorrect) {
        throw new Error("Invalid credentials")
      }
      done(null, user)
    }
    catch (err) {
      done(err, null)
    }
  })
)