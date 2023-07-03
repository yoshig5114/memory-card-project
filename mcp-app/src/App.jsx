
import React from 'react'
import './App.css'
import { useState,useEffect } from 'react'
import Card from './Components/Cards'

function App() {
  const [card,setCard] = useState([])
  const [reset,setReset] = useState(false)
  const [score,setScore] = useState(0)
  const [highScore,setHighScore] = useState(0)
  const [gameOver,setGameOver] = useState(false)
  const [shuffle,setShuffle] = useState(false)
  




  return (
    <div className="App">
      <header className="App-header">
        <h1>MEMORY CARD GAME</h1>
      </header>

      <Card  />
        
      
    </div>
  );
}

export default App;
