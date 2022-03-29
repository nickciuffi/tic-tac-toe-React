import React from 'react'
import Square from './Square'

export default function Board({boardPlays, changePlays}) {

    
    
    return(
    boardPlays.map(play =>{
       
       return <Square changePlays={changePlays} play={play} key={play.key} />
     })
    )
  
}
