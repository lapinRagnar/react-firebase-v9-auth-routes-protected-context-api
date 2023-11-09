import { Link, Outlet } from "react-router-dom"
import { UserAuth } from '../../context/AuthContext'

import setting from '../../assets/setting.svg'

const GlobalLayout = () => {

  const { user } = UserAuth()

  return (
    <div>
    <h1 className="text-center text-2xl font-bold">
      Firebase Auth & Context api
    </h1>
    <div className="my-5">Layout Principale</div>

    <div className="flex items-center justify-center gap-10">
      <p>Bonjour {user && user.email} </p>
      <Link to="/auth/account">
        <div className="flex border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200">
         <img src={setting} alt="setting" width={25}/>
         Mon compte
        </div>
      </Link>
    </div>

    <div>
      <Outlet />
    </div>
    
    <div>Footer</div>
    </div>
  )
}

export default GlobalLayout