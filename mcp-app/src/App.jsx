
import './App.css'
import React,{ useState,useEffect } from 'react'
import Card from './Components/Cards'
import ScoreBoard from './Components/Scores'
import PlayArea from './Components/PlayArea'

function App() {
  
  const [reset,setReset] = useState(false)
  const [score,setScore] = useState(0)
  const [highScore,setHighScore] = useState(0)
  const [gameOver,setGameOver] = useState(false)
  const [cardBack,setCardBack] = useState(true)
  const [cardFront,setCardFront] = useState(true)
  const {card,setCard} = useState(cardBack)
  const [seenCards,setSeenCards] = useState([])
  const [scoreBoard,setScoreBoard] = useState([score,highScore])

  
  useEffect(() => {
    resetSeenCards()
  },[])

  function resetSeenCards(){
    setSeenCards([])
  }

  function startGame(){
    let unseenCards =cardFront.filter(card => !seenCards.includes(card))
    if(unseenCards.length === 0){
      setGameOver(true)
      setHighScore(score)
      setReset(true)
      resetSeenCards()
      setCard(unseenCards)
    }
    let randomNumber = Math.floor(Math.random() * unseenCards.length);
    let chosenCard = unseenCards[randomNumber];
    setCardFront(cardFront.map((card) => (card.id === chosenCard.id ? { ...card, seen: true } : card)));
    setCard(chosenCard);
    setSeenCards([...seenCards, chosenCard.id]);
    setScore(score + 1);
    setReset(false)  
  }
  
  function handleAnswer(answer){
    if(answer === card.answer){
      startGame()
    }else{
      setScore(0)
      setGameOver(true)
      setHighScore(score)
      setReset(true)
      resetSeenCards()
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>MEMORY CARD GAME</h1>
      </header>
      <ScoreBoard score={score} highScore={highScore} gameOver={gameOver} reset={reset} setReset={setReset} />
      <div className="game-container">
        <Card onClick={startGame} />
        <PlayArea onClick={handleAnswer} reset={reset} card={card} />
      </div>
      
    </div>
  );
}

export default App;
