import React from 'react'

export default function Square({value}) {
   
  return (
    <div className='square'>{value != " " ? value : ""}</div>
  )
}
