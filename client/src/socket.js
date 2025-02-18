import { io } from "socket.io-client"

// "undefined" means the URL will be computed from the `window.location` object
const URL = import.meta.env.VITE_API_SERVER_URL || "http://localhost:8000"

export const socket = io(URL)