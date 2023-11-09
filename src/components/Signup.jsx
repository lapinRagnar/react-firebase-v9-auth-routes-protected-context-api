import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import {UserAuth} from '../context/AuthContext'

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const {createUser} = UserAuth()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      await createUser(email, password)
      navigate('/')

    } catch (error) {
      setError(error.message)
      console.log(error.message)
    }
  }

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">

      <h1 className="text-4xl font-bold py-2">Sign up</h1>

      <form onSubmit={handleSubmit}>

        <div className="my-5">
          <input 
            type="email" 
            placeholder="Email"
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            onChange={(e) => setEmail(e.target.value)}  
          />
        </div>

        <div className="my-5">
          <input 
            type="password" 
            placeholder="Password" 
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"  
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="my-5 w-[150px] rounded-lg bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        >
          Sign up
        </button>

      </form>

      <p className="py-4">
        already have an account? 
        <Link className="underline ml-2" to="/auth/signin">sign in</Link>
      </p>
    
    </div>
  )
}

export default Signup