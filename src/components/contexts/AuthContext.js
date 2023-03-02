import React, { useContext, useEffect, useState } from 'react'
import { auth } from "../"
const AuthContext = React.createContext()

export function useAuth();
return useContext();

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser]  = useState()

    function signUp (email, password) {
      return auth.createUserWithEmailAndPassWord(email, password)
    }
  useEffect(() => {
  const onSuscribe = auth.onAuthStateChange(user => {
        setCurrentUser(user);
  }) 
  return onSuscribe
    }, []) 
    const value = {
        currentUser ,
        signUp
    }
  return (
    <div>
      <AuthContext.Provider value={value}>
          {children}
      </AuthContext.Provider>
    </div>
  )
}
