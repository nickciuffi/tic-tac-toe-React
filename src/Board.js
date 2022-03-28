import React from 'react'
import Square from './Square'

export default function Board({boardPlays}) {
    
    return(
    boardPlays.map(play =>{
    
       return <Square value={play.Value} key={play.key} />
     })
    )
  
}
