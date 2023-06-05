
import { useRef, useState, forwardRef } from "react"



export default forwardRef(function Input(props, ref){

    const placeholder = props.placeholder
    const error = props.error? props.error : false
    const countries = props.optionsList

    const [placeholderClass, setPlaceholderClass] = useState('placeholder placeholder_focused filled')
    const [inputBoxClass, setInputBoxClass] = useState('input_box') 

    const handleFocus = ()=>{
        if(!error){
            setPlaceholderClass('placeholder placeholder_focused')
            setInputBoxClass('input_box input_box_focused')
        }
            
        else{
            setPlaceholderClass('placeholder placeholder_focused placeholder_error')
            setInputBoxClass('input_box input_box_focused_error')
        }
            
    }

    const handleBlur=()=>{
        if(ref.current.value === ''){
            setPlaceholderClass('placeholder_focused filled')
            error? setInputBoxClass('input_box input_box_error') : setInputBoxClass('input_box')
        }
        else {
            if(!error){
                setPlaceholderClass('placeholder placeholder_focused filled')
                setInputBoxClass('input_box')
            }
                
            else 
                {
                    setPlaceholderClass('placeholder_focused placeholder_error')
                    setInputBoxClass('input_box input_box_error')
                }
        }
    }

    const handleChange = (e)=>{
     //   ref.current.value = e.target.value
    }

    const handleClick=()=>{
        ref.current.focus()
    }

    return(
        <div className="input_wrapper">
            <div className='input_container'>
                <select ref={ref}  className={inputBoxClass} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange}>
                    <option>select country</option>
                    {countries.map(country=>(<option key={country.label}>{country.label}</option>))}
                </select>
                <div className= {placeholderClass} onClick={handleClick}>{placeholder}</div>
            </div>
        </div>
    )
})
