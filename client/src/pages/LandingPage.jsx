import {BrowserRouter as Router, Link } from 'react-router-dom'


export default function LandingPage(){
    return(
 
    <div className='lp_container'>
        <button className='lp_loginButton'>
            <Link to='/login'>login</Link>
        </button>
    </div>

    )
}