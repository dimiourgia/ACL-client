import {useState, useRef, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'




export default function Register(){
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const countryRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef()

    const handleSubmit = async (event) =>{
        event.preventDefault()

        const firstName = firstNameRef.current.value
        const lastName = lastNameRef.current.value
        const country = countryRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value

        try{
            axios.post('http://localhost:8084/register', {firstName, lastName, country, email, password}).then(res=>console.log(res.data))
            
        }
        catch(err){
            console.log(err)
        }
        
    }







    return(
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className='form-group'>
                <label htmlFor="firstName" >First Name:</label>
                <input id='firstName' type='text' ref={firstNameRef}/>            
            </div>

            <div className='form-group'>
                <label htmlFor="lastName" >Last Name:</label>
                <input id='lastName' type='text' ref={lastNameRef}/>            
            </div>

            <div className='form-group'>
                <label htmlFor="country" >Country:</label>
                <input id='country' type='text' ref={countryRef} />            
            </div>

            <div className='form-group'>
                <label htmlFor="email" >Email:</label>
                <input id='email' type='text' ref={emailRef} />            
            </div>

            <div className='form-group'>
                <label htmlFor="password" >Password:</label>
                <input id='password' type='password' ref={passwordRef} />            
            </div>

            <button type='submit' >Register</button>

        <br/>
 
        Already have an account? <Link to='/login' className='LoginLink'>Login</Link>
        </form>
    </div>
)}