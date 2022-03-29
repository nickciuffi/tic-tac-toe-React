import React from 'react'

export default function Square({play, changePlays}) {

    function handleClick(){
       
      changePlays(play.key)
    }
   
  return (
    <div onClick={handleClick} className='square'>{play.value}</div>
  )
}
