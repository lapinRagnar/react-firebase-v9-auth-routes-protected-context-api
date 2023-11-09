import { Link } from "react-router-dom"

const Signin = () => {
  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">

      <h1 className="text-4xl font-bold py-2">Sign In</h1>

      <div className="my-5">
        <input 
          type="email" 
          placeholder="Email"
          className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"  
        />
      </div>

      <div className="my-5">
        <input 
          type="password" 
          placeholder="Password" 
          className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"  
        />
      </div>

      <button
        className="my-5 w-[150px] rounded-lg bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
      >
        Sign up
      </button>

      <p className="py-4">
        Don&apos;t have an account yet? 
        <Link className="underline ml-2" to="/auth/signup">sign up</Link>
      </p>
    
    </div>
  )
}

export default Signin