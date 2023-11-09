import { useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"
const Account = () => {

  const { user, logout } = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async() => {
    try {
      await logout()
      navigate("/")
      console.log("you are logged out");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="max-w-[700px] mx-auto my-5 p-2">
      <h1 className="text-4xl font-bold py-3">User Account page</h1>
      <p>User email: {user && user.email} </p>
      <button 
        onClick={handleLogout}
        className="border my-10 px-6 py-2 rounded-lg hover:bg-orange-600"
      >
        Logout
      </button>
    </div>
  )
}

export default Account