import "dotenv/config"
import axios from "axios"

const user = { email: "Mina_Clifton@yahoo.com", password: "test" }

const testAuth = await axios.post(`${process.env.SERVER_URL}/auth`, user)
console.log("testAuth", testAuth.data)