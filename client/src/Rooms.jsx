import { useState } from "react"
import { socket } from "./socket"

const Rooms = ({ events }) => {
  const [ message, setMessage ] = useState("")
  const [ isLoading, setIsLoading ] = useState(false)

  const sendMessage = (e) => {
    console.log("sendMessage")
    setIsLoading(true)
    
    socket.timeout(5000).emit("foo", message, () => {
      setIsLoading(false)
      setMessage("")
    })
  }

  return (
    <div>
      <ul>
        {
          events.map((event, index) =>
            <li key={index}>{event}</li>
          )
        }
      </ul>

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
            onClick={sendMessage}
            disabled={isLoading}
            type="button"
            className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 disabled:dark:bg-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

export default Rooms