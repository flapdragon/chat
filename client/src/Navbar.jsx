import { Link, useLocation } from "react-router"

const Navbar = ({ users }) => {
  let location = useLocation()
  console.log("location", location)

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Chat</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 ${location.pathname === "/" ? "text-blue-500 dark:text-blue-500" : "text-gray-900 dark:text-white"} md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/rooms"
                className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 ${location.pathname === "/rooms" ? "text-blue-500 dark:text-blue-500" : "text-gray-900 dark:text-white"} md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                aria-current="page"
              >
                Rooms
                <span className={`ml-1 inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold ${location.pathname === "/rooms" ? "text-blue-500 dark:text-blue-500" : "text-gray-900 dark:text-white"} bg-gray-100 rounded-full dark:bg-gray-700`}>
                  {users.length}
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 ${location.pathname === "/login" ? "text-blue-500 dark:text-blue-500" : "text-gray-900 dark:text-white"} md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                aria-current="page"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar