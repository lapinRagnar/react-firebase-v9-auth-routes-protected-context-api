import { Outlet } from "react-router-dom"
const GlobalLayout = () => {
  return (
    <div>
      <div>Layout Principale</div>
      <div>
        <Outlet />
      </div>
      <div>Footer</div>
    </div>
  )
}

export default GlobalLayout