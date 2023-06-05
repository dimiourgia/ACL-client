import { useRef, useState, forwardRef, useEffect } from "react"



export default forwardRef(function Input(props, ref){


    const placeholder = props.placeholder
    const type = props.type
    const [error, setError] =  useState(props.error)
    const [placeholderClass, setPlaceholderClass] = useState('placeholder')
    const [inputBoxClass, setInputBoxClass] = useState('input_box') 

    const handleFocus = ()=>{
            setPlaceholderClass('placeholder placeholder_focused')
            setInputBoxClass('input_box input_box_focused')
    }

    const handleBlur=()=>{
        if(ref.current.value === ''){
            setPlaceholderClass('placeholder')
            setInputBoxClass('input_box')
        }
        else {
            setPlaceholderClass('placeholder placeholder_focused filled')
            setInputBoxClass('input_box')
        }
    }

    const handleClick=()=>{
        ref.current.focus()
    }

        return(
            <div className="input_wrapper">
                <div className="input_container">
                    <input
                        ref={ref} 
                        onFocus={handleFocus} 
                        onBlur={handleBlur}
                        className={inputBoxClass} 
                        type={type} />
                    <div className= {placeholderClass} onClick={handleClick}>{placeholder}</div>
                </div>  
            </div>
        )
})