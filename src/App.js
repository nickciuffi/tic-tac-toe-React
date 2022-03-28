import Board from "./Board";
import './app.css'
import React, { useState, useEffect } from 'react'

function App() {

  const [boardPlays, setBoardPlays] = useState([{Value:'', key:'1'}, {Value:'X', key:'2'}, {Value:'O', key:'3'}, {Value:'', key:'4'}, {Value:'', key:'5'}, {Value:'', key:'6'}, {Value:'O', key:'7'}, {Value:'', key:'8'}, {Value:'O', key:'9'}])
  
  return (
    <>
    <h1>Tic Tac Toe</h1>
    <div className="container">
      <Board boardPlays={boardPlays}/>
    </div>
    </>
  );
}

export default App;
