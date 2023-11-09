
const Account = () => {
  return (
    <div className="max-w-[700px] mx-auto my-5 p-2">
      <h1 className="text-4xl font-bold py-3">User Account page</h1>
      <p>User email:</p>
      <button 
        className="border my-10 px-6 py-2 rounded-lg hover:bg-orange-600"
      >
        Logout
      </button>
    </div>
  )
}

export default Account