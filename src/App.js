import Board from "./Board";
import './app.css'
import React, { useState, useEffect } from 'react'


function App() {

  const [boardPlays, setBoardPlays] = useState([{value:'', key:'1', played:false}, {value:'', key:'2', played:false}, {value:'', key:'3', played:false}, {value:'', key:'4', played:false}, {value:'', key:'5', played:false}, {value:'', key:'6', played:false}, {value:'', key:'7', played:false}, {value:'', key:'8', played:false}, {value:'', key:'9', played:false}])
  const [player, setPlayer] = useState("X")
  const [won, setWon] = useState(false)
  
  

  useEffect(() =>{
   
    checkWin();
  },)
  
  function changePlays(num){

    var newPlays = boardPlays
    const play = newPlays.find(play => play.key === num)
   
    if(play.played) return

    play.played = !play.played
    play.value = player;
    
    if(player ==="X"){
      setPlayer("O")
    }
    else{
      setPlayer("X")
    }
    //não é necessário pq o newPlays somente armazena uma referencia para a variável e por isso o boardPlays já foi mudado
    //setBoardPlays(newPlays)
  }

  function checkWin(){
    const analisePlays = boardPlays
    
    //check diagonal
    if(analisePlays[0].value !== "" && analisePlays[0].value === analisePlays[4].value && analisePlays[8].value === analisePlays[4].value){
      setWon(true);
    }
    else if(analisePlays[2].value !== "" && analisePlays[2].value === analisePlays[4].value && analisePlays[4].value === analisePlays[6].value){
      setWon(true)
    }
    for(let i = 0; i < 9; i=+3){
      if(analisePlays[i].value !== "" && analisePlays[i].value === analisePlays[i+1].value && analisePlays[i+1].value === analisePlays[i+2].value){
        setWon(true);
      }
    }
  }


  return (
    <>
    <h1>Tic Tac Toe</h1>
    <div className="container" onClick={() => changePlays}>
      <Board changePlays={changePlays} boardPlays={boardPlays}/>
    </div>
    <h2>{won ? 'Você ganhou jogador ${player}' : 'nao ganhou ainda ${player}'}</h2>
    </>
  );
}

export default App;
