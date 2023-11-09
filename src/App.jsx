
import './App.css'
import { Route, Routes } from 'react-router-dom'

import GlobalLayout from './pages/layouts/GlobalLayout'
import AuthLayout from './pages/layouts/AuthLayout'

import Signup from './components/Signup'
import Signin from './components/Signin'

import Home from './pages/Home'
import Contact from './pages/contact/Contact'
import Account from './components/Account'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoot from './components/ProtectedRoot'
function App() {


  return (
    <div>

      <AuthContextProvider>

        <Routes>
          <Route element={<GlobalLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
            <Route path="account" element={
              <ProtectedRoot>
                <Account />
              </ProtectedRoot>
            } />
          </Route>
        </Routes>

      </AuthContextProvider>

    </div>
  )
}

export default App
