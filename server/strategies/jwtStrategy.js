import passport from "passport"
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt"
import userModel from "../user/userModel.js"

const jwtSecret = process.env.JWT_SECRET || "secret"

// JWT strategy options
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret
}

// For authenticated users
passport.use(
  new JwtStrategy(opts, async (jwtPayload, done) => {
    try {
      console.log("passport jwt jwtPayload", jwtPayload)
      const user = await userModel.findOne({ _id: jwtPayload._id })
      if (user) {
        return done(null, user)
      }
      else {
        return done(null, false)
      }
    }
    catch (err) {
      return done(err, null)
    }
  })
)