import React, { useRef, useState } from 'react';
import { useAuth } from "../context/AuthContext"
 const [error, setError] = useState("")


const Login = () => {

    async function handleSubmit(e) {

    e.preventDefault()
    if(passwordRef.current.value === "" || emailRef.current.value === "") {
        return setError("please Enter your details")
    }
    try {
        setError("")
      await signUp(emailRef.current.value, passwordRef.current.value)
    } catch (error) {
          setError("FAILED TO  CREATE ACCOUNT")
    }
}
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signUp }  = useAuth();
 return(
    <div>
         <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <label>Email</label>
           <input type="email" ref={emailRef} placeholder='enter your email'/> 
        </div>
        <div className='form-group'>
            <label>password</label>
           <input type="password" ref={passwordRef} placeholder='enter your password'/> 
        </div>
        <button >submit</button>
        </form>
    </div>
 )
}
export default Login