import { Outlet } from "react-router-dom"
const GlobalLayout = () => {
  return (
    <div>
    <h1 className="text-center text-5xl font-bold">
    Firebase Auth & Context api
    </h1>
    <div>Layout Principale</div>

    <div>
      <Outlet />
    </div>
    
    <div>Footer</div>
    </div>
  )
}

export default GlobalLayout