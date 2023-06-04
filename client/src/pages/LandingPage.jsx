import {BrowserRouter as Router, Link } from 'react-router-dom'
import Board from '../components/Board'



export default function LandingPage(){

    const default_map=    [
        ["wr","wn","wb","wq","wk","wb","wn","wr"],
        ["wp","wp","wp","wp","wp","wp","wp",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["bp","bp","bp","bp","bp","bp","bp",""],
        ["br","bn","bb","bq","bk","bb","bn","br"]        
    ];


    return(
 
    <div className='lp_container'>
        <div className='topbar'>
            <div className='logoText'>Puzzler</div>
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
                    map = {default_map}
                    flipped={false}
                />
            </div>  
        </div>
        <div className='spacer layer1'></div>
    </div>

    )
}