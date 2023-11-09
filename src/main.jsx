import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  BrowserRouter,
  // createBrowserRouter,
  // RouterProvider,
} from "react-router-dom"
// import GlobalLayout from './pages/layouts/GlobalLayout.jsx'
// import ErrorPage from './pages/ErrorPage.jsx'
// import Contact from './pages/contact/Contact.jsx'
// import Home from './pages/Home.jsx'
// import AuthLayout from './pages/layouts/AuthLayout.jsx'
// import Signup from './components/Signup.jsx'


/* const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/signup",
        element: <Signup />
      }
    ]
  }

]); */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
