import {useState, useRef, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'




export default function Login(){


const emailRef = useRef()
const passwordRef = useRef()

const handleLogin = (e)=>{
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value

    axios.post('http://localhost:8084/login', {email, password})
    .then(res=>console.log(res.data))
}

    return(
    <div className='container'>
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            
            <div className='form-group'>
                <label htmlFor="email" >Email:</label>
                <input id='email' type='text' ref={emailRef} />            
            </div>

            <div className='form-group'>
                <label htmlFor="password" >Password:</label>
                <input id='password' type='password' ref={passwordRef} />            
            </div>

        <button type='submit'>Login</button>
        <br/>
 
        Don't have an account? <Link to='/register' className='registerLink'>Sign Up</Link>
        </form>
    </div>
)}