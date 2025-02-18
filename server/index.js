import "dotenv/config"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import session from "express-session"
import cookieParser from "cookie-parser"
import passport from "passport"
import { createServer } from 'node:http'
import { Server } from "socket.io"
import "./strategies/jwtStrategy.js" // Passport JWT strategy
import "./strategies/localStrategy.js" // Passport local strategy
import authRouter from "./auth/index.js"
import userRouter from "./user/userIndex.js"

const port = process.env.PORT || 8000
const cookieSecret = process.env.COOKIE_SECRET || "secret"
const sessionSecret = process.env.SESSION_SECRET || "secret"

const app = express()
app.use(express.json())
app.use(cookieParser(cookieSecret))

const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: process.env.WHITELISTED_DOMAINS, // TODO: Works for only one domain
    methods: [ "GET", "POST" ]
  }
})

// Express CORS
// Get whitelisted domains from env
const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : []
// Set CORS options
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    }
    else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true
}
// Use CORS
app.use(cors(corsOptions))

// Sessions, default
app.use(session({}))

// Add Passport
app.use(passport.initialize())
app.use(passport.session())

app.use("/auth", authRouter)
app.use("/users", userRouter)

app.all('*', (req, res) =>{
  res.status(404).json({
      success: false,
      data: '404'
  })
})

const userSocketMap = {}

io.on("connection", (socket) => {
  // console.log("connection", socket.id)
  console.log("connection handshake", socket.handshake.query)

  // Get user id
	const userId = socket.handshake.query.userId
	if (userId != "undefined") {
    // Add to user list
    userSocketMap[userId] = socket.id
    // Broadcast user list
    io.emit("getOnlineUsers", Object.keys(userSocketMap))
  }
  console.log("userSocketMap", userSocketMap, Object.keys(userSocketMap))
  
  socket.on("room-1", (msg) => {
    console.log("room-1 message: " + msg)
    io.emit("room-1", msg)
  })
  socket.on("room-2", (msg) => {
    console.log("room-2 message: " + msg)
    io.emit("room-2", msg)
  })
  socket.on("room-3", (msg) => {
    console.log("room-3 message: " + msg)
    io.emit("room-3", msg)
  })
  socket.on("foo", (msg) => {
    console.log("foo message: " + msg)
    io.emit("foo", msg)
  })
})

try {
  const mongoURL = process.env.MONGODB_URL || ""
  await mongoose.connect(mongoURL)
  console.log(`Login starter connected to database ${mongoURL}`)

  server.listen(port, () => {
    console.log(`Login starter listening on port ${port}`)
  })
}
catch(err) {
  console.log(err)
}
