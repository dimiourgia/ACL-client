import {BrowserRouter as Router, Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import Board from '../components/Board'
import {fenToMap} from '../utils/helper.js'



export default function LandingPage(){
    const board_states = [{fen:'2R1K3/2Q5/8/8/8/8/pp6/1k5r'}, {fen:'2R1K3/8/8/8/8/8/ppQ5/1k5r'}, {fen:'2R1K3/8/8/8/8/8/ppQ5/k6r'}, {fen:'2R1K3/8/8/8/8/8/pp6/k1Q4r'}, {fen:'2R1K3/8/8/8/8/8/pp6/k1r5'}, {fen:'4K3/8/8/8/8/8/pp6/k1R5'}]
    const [map, setMap] = useState(fenToMap(board_states[0].fen))
    
    let index = 1;
    const updateMap = ()=>{
        if(index>5) index=0
        console.log(index)
        setMap(fenToMap(board_states[index].fen))
        index++

    }

    useEffect(()=>{
    //    const interval = setInterval(updateMap, 3000)

     //   return () => clearInterval(interval)
    }, [])


    return(
 
    <div className='lp_container'>
        <div className='topbar'>
            <div className='logoText'>
               <Link to='/'>Puzzler</Link> 
            </div>
        </div>
        <div className="hero">
            <div className="section1">
                <div className="hero_text">
                    Want to take your game to the next level?
                </div>
                <Link to='/login' stle={{width:'fit-content'}}>
                    <button className='button login_button'>Login</button>
                </Link>
            </div>
            
            <div className='board_container'>
                <Board 
                    board_size={350}
                    map = {map}
                    flipped={false}
                />
            </div>  
        </div>
        <div className='spacer layer1'></div>
    </div>

    )
}