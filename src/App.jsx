
import './App.css'
import { Route, Routes } from 'react-router-dom'

import GlobalLayout from './pages/layouts/GlobalLayout'
import AuthLayout from './pages/layouts/AuthLayout'

import Signup from './components/Signup'
import Signin from './components/Signin'

import Home from './pages/Home'
import Contact from './pages/contact/Contact'
import Account from './components/Account'
function App() {


  return (
    <div>

      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
