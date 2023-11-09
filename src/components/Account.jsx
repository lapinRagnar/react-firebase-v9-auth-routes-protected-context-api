import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

import home from '../assets/home.svg'

const Account = () => {

  const { user, logout } = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async() => {
    try {
      await logout()
      navigate("/auth/signin")
      console.log("you are logged out");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col items-center max-w-[700px] mx-auto my-5 p-2">
      <h1 className="text-4xl font-bold py-3">User Account page</h1>
      <p className="pb-10">User email: {user && user.email} </p>

      <Link className="" to="/">
        <div className="w-[150px] flex items-center justify-center gap-5 border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200">
          <img src={home} alt="setting" width={25}/>
          home
        </div>
      </Link>

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