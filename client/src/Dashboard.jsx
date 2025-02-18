import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { status } from "./auth/authService"

const Dashboard = () => {
  const navigate = useNavigate()

  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const checkStatus = async () => {
      const token = localStorage.getItem("token")
      if (!token) {
        navigate("/login")
      }
      const response = await status(token)
      console.log(response.data)
    }
    checkStatus()
  }, [])
  
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard