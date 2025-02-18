import { useState, useEffect } from "react"
import { Routes, Route } from "react-router"
import { socket } from "./socket"
import PrivateRoute from "./PrivateRoute"
import { ConnectionState } from "./ConnectionState"
import Navbar from "./Navbar"
import Home from "./Home"
import Rooms from "./Rooms"
import Dashboard from "./Dashboard"
import Login from "./Login"
import NoMatch from "./NoMatch"
import "./App.css"

function App() {
  const [ isConnected, setIsConnected ] = useState(socket.connected)
  const [ fooEvents, setFooEvents ] = useState([])
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    function onFooEvent(value) {
      setFooEvents(previous => [ ...previous, value ])
    }

    function onGetOnlineUsers(userList) {
      console.log("onGetOnlineUsers")
      setUsers(userList)
    }

    socket.on("connect", onConnect)
    socket.on("disconnect", onDisconnect)
    socket.on("foo", onFooEvent)
    socket.on("getOnlineUsers", onGetOnlineUsers)

    return () => {
      socket.off("connect", onConnect)
      socket.off("disconnect", onDisconnect)
      socket.off("foo", onFooEvent)
      socket.off("getOnlineUsers", onGetOnlineUsers)
    }
  }, [])
  

  return (
    <>
      {/* <ConnectionState isConnected={ isConnected } /> */}
      <Navbar users={users} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms events={fooEvents} />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
