import {useState, useRef, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import countries from '../utils/countryList.json'
import Input from '../components/Input'
import InputFieldSelect from '../components/InputFieldSelect'
import Error from '../components/Error'


export default function Register(){
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const countryRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef()

    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [countryError, setCountryError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [error, setError] = useState(false)
    
    useEffect(()=>{
        firstNameRef.current.focus()
    },[])
    

    const handleSubmit = async (event) =>{
        event.preventDefault()

    //validate all input befor sending to server
        const firstName = firstNameRef.current.value
        const lastName = lastNameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const country = countryRef.current.value

        setFirstNameError(false)
        setLastNameError(false)
        setCountryError(false)
        setEmailError(false)
        setPasswordError(false)
        setError(false)

        let goodToGo = true

        if(firstName === ''){
            setError('Please provide your first name')
            setFirstNameError(true)
            return
        }
        if(lastName === ''){
            setError('Plase provide your last Name')
            setLastNameError(true)
            return
        }

        if(country === '' || country === 'select country'){
            setError('Please select your country')
            setCountryError(true)
            return
        }
        if(email === '') {
            setError('Please provide your email address')
            setEmailError(true)
            return
        }
        if(password === '') {
            setError('Please enter a password')
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
    
    //Everything looks good send the form to server

        try{
            axios.post('http://localhost:8084/register', {firstName, lastName, country, email, password})
            .then(res=>{
                console.log(res.data)
                if(res.data.type!==undefined && res.data.type==='error')
                    setError(res.data.message)
            })
            
        }
        catch(err){
            console.log(err)
        }
        
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
            <form onSubmit={handleSubmit}>
            <div style={{display:'flex', columnGap:'8px', marginBottom:'14px'}}>
                <Input placeholder={'First Name'} ref={firstNameRef} type={'text'} error={firstNameError} />
                <Input placeholder={'Last Name'} ref={lastNameRef} type={'text'} error={lastNameError} />
            </div>
            
            <InputFieldSelect placeholder={'Country'} ref={countryRef} optionsList={countries} error={countryError} />
            <Input placeholder={'Email'} ref={emailRef} type={'text'} error={emailError} />
            <Input placeholder={'Password'} ref={passwordRef} type={'password'} error={passwordError} />
            {error && <Error error={error} />}

            <div className='form_button_wrapper'>
                <button className='button form_button' type='submit' >Register</button>
            </div>
            <br/>
        <div style={{textAlign:'center'}}>
         Already have an account? <Link to='/login' className='registerLink'>Login</Link>
        </div>
        </form>
  
            </div>
        </div>
        <div className='spacer layer1'></div>
    </div>

    
)}