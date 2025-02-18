import { useState, useEffect } from "react"
// import io from "socket.io-client"

const Home = () => {
  const userId = sessionStorage.getItem("userId")
  console.log("userId", userId)
  // const socket = io(import.meta.env.VITE_API_SERVER_URL, {
  //   query: {
  //     userId
  //   }
  // })

  const [ room, setRoom ] = useState("room-1")
  const [ messages, setMessages ] = useState([])
  const [ message, setMessage ] = useState("")
  const [ users, setUsers ] = useState([])

  // socket.on("getOnlineUsers", (socketUsers) => {
  //   setUsers(socketUsers)
  // })

  // useEffect(() => {
  //   console.log("room", room)
  // }, [room])
  
  // // Listen for room-1 events
  // socket.on(room, (msg) => {
  //   setMessages([...messages, msg])
  // })

  const handleMessage = () => {
    console.log("handleMessage", room, message)
    // Emit message
    // socket.emit(room, message)
    // Clear out message input
    setMessage("")
  }

  return (
    <div>
      <h1>Home</h1>


    <div className="max-w-sm flex">
      <label htmlFor="rooms" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
      <select
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        id="rooms"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="room-1">Room 1</option>
        <option value="room-2">Room 2</option>
        <option value="room-3">Room 3</option>
      </select>
    </div>

      {messages.map((message, index) => (
        <div key={index} className="flex">
          <div className="relative w-3/4">{message}</div>
        </div>
      ))}

      <div className="flex">
        <div className="relative w-3/4">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
          <button
            onClick={handleMessage}
            type="button"
            className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home