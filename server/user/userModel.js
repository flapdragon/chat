import mongoose from "mongoose"
import userSchema from "./userSchema.js"

userSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    delete ret._id
    delete ret.refreshToken
    delete ret.authStrategy
    delete ret.__v
    return ret
  }
})

const userModel = mongoose.model("User", userSchema)

export default userModel
