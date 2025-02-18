import { Navigate, Outlet } from "react-router"

const PrivateRoute = () => {
  const token = localStorage.getItem("token")

  // If user is logged
  if (token) {
    return <Outlet />
  }
  // If user is not logged in, navigate to login
  else {
    return <Navigate to="/login" />
  }
}

export default PrivateRoute
