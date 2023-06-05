import {useState, useRef, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import king from '../assets/images/pieces/bk.png'
import Input from '../components/Input'
import Error from '../components/Error'




export default function Login(){


const emailRef = useRef()
const passwordRef = useRef()
const [error, setError] = useState(false)
const [emailError, setEmailError] = useState(false)
const [passwordError, setPasswordError] = useState(false)

const handleLogin = (e)=>{
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value

    setError(false)
    setEmailError(false)
    setPasswordError(false)

    if(email===''){
        setError('Email can not be blank')
        setEmailError(true)
        return
    }

    if(password===''){
        setError('Password can not be blank')
        setPasswordError(true)
        return
    }

    if(email!==''){
        if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            setError('Invalid Email')
            setEmailError(true)
            return
        }
    }

    axios.post('http://localhost:8084/login', {email, password})
    .then(res=>{
        if(res.data.type !== undefined){
            if(res.data.type === 'error') setError(res.data.message)
        }
        console.log(res.data, error)
    })
    .catch((err)=>{
        if(err.response){
            setError(err.response.data)
        }
    })
}

    return(
    <div className='login_container'>
        <div className='topbar'>
            <div className='logoText'>
                <Link to='/'>Puzzler</Link>
            </div>
        </div>

       <div className="form_container_wrapper">
            <div className="form_container">
                <form onSubmit={handleLogin}>
                        <Input placeholder={'Email'} ref={emailRef} type={'text'} />     
                        <Input placeholder={'Password'} ref={passwordRef} type={'password'}  />
                        {error && <Error error={error}/>}
                        
                        <div className="form_button_wrapper">
                            <button className='button form_button' type='submit'>Login</button>
                        </div>
                        <br/>
                        <div style={{textAlign:'center'}}>
                            Don't have an account? <Link to='/register' className='registerLink'>Sign Up</Link>
                        </div> 
                   </form>
            </div>
       </div>
        <div className='spacer layer1'></div>


    </div>
)}