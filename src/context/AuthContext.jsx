import { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'

import {auth} from '../firebase'

const UserContext = createContext(null)


export const AuthContextProvider = ({children}) => {

  const [user, setUser] = useState({})
  
  const createUser = (user, password) => {
    return createUserWithEmailAndPassword(auth, user, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser)
      
      return () => {
        unsubscribe()
      }
    })
  }, [])


  return (
    <UserContext.Provider value={{createUser, auth}}>
      {children}
    </UserContext.Provider>
  )
}


export const UserAuth = () => {
  return useContext(UserContext)
}