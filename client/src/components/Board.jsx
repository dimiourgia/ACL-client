import wr from '../assets/images/pieces/wr.png'
import wn from '../assets/images/pieces/wn.png'
import wb from '../assets/images/pieces/wb.png'
import wk from '../assets/images/pieces/wk.png'
import wq from '../assets/images/pieces/wq.png'
import wp from '../assets/images/pieces/wp.png'
import br from '../assets/images/pieces/br.png'
import bn from '../assets/images/pieces/bn.png'
import bb from '../assets/images/pieces/bb.png'
import bk from '../assets/images/pieces/bk.png'
import bq from '../assets/images/pieces/bq.png'
import bp from '../assets/images/pieces/bp.png'

import boardImage from '../assets/images/others/board.jpg'



export default function Board(props){
    const board_size = props.board_size
    const flipped = props.flipped
    const map = props.map
    const map_c = map.map(row=>row.slice())
    const board = []


        map.map((row, i) =>{
            row.map((piece, j) =>{
              piece && board.push(
                  <img src = {eval(piece)} key={`${i}-${j}`} style={
                    {
                        zIndex:1,
                        width: board_size/8,
                        height: board_size/8,
                        position:"absolute",
                        top: flipped ? ((i)*(board_size/8)) : ((7-i)*(board_size/8)),
                        left: flipped ?   (7-j)*board_size/8 : j*board_size/8
                    }}
                 />         
                 )})});
    
                 var flag=false;
                 map_c.map((row,i)=>{
                  flag=!flag;
                  row.map((sqr,j)=>{
                    board.push(
                    <div
                    key={`${i}--${j}`}
                    style={{
                      width:board_size/8,
                      height:board_size/8,
                      top: (7-i)*(board_size/8),
                      position:'absolute',
                      zIndex:.2,
                      left:  j*board_size/8,
                      backgroundColor: flag ? '#30627980' : '#d1c1c180', 
                    }}
                    />)
                    flag=!flag;
                  })
                })

    return(
        <div style={{position:'relative'}}>
        <div style={{
            position:'absolute',
            width:board_size,
            height:board_size,
            zIndex:.5,
            left:0,
            top:0,
            backgroundImage: `url(${boardImage})`,
            backgroundSize: 'cover',
            borderRadius:'4px',
        }}/>
        {board}
        </div>
        );
}