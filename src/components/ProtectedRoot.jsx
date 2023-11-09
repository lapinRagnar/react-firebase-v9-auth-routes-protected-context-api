import { Navigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

const ProtectedRoot = ({children}) => {

  const { user } = UserAuth()

  if (!user) {
    return <Navigate to="/auth/signin" />
  }

  return children
}

export default ProtectedRoot