import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import userModel from "../user/userModel.js"

const jwtSecret = process.env.JWT_SECRET || "secret"
const tokenExpiration = process.env.TOKEN_EXPIRATION || 60 * 60 * 24 * 30 // 30 days

const cookieOptions = {
  httpOnly: true,
  secure: false, // https
  signed: true,
  maxAge: tokenExpiration,
  sameSite: "none",
  domain: "localhost",
  path: "/"
}

const createToken = (user) => {
  console.log("createToken user", user)
  return jwt.sign(
    user,
    jwtSecret,
    { expiresIn: tokenExpiration }
  )
}

const login = async (req, res, next) => {
  const { _id } = req.user
  console.log("login _id", _id)
  const token = createToken({ _id })
  console.log("login token", token)
  try {
    const user = await userModel.findOne({ _id })
    console.log("login user", user)
    if (user.token) {
      user.token.push({ token });
    }
    else {
      user.token = [{ token }]
    }
    user.save()
    res.cookie("token", token, cookieOptions)
    res.status(200).json({ success: true, token })
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ message: "There was an error." })
  }
}

export default login