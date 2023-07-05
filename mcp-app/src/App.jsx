
import React, { useState, useEffect } from 'react';
import './App.css';
import Card, { cardFrontData } from './Components/Cards';
import ScoreBoard from './Components/Scores';
import PlayArea from './Components/PlayArea';

function App() {
  let randomStart = Math.floor(Math.random() * 10);
  const [reset, setReset] = useState(false);
  const [score, setScore] = useState({ current: 0, high: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [card, setCard] = useState(cardFrontData[randomStart-1].id);
  const [seenCards, setSeenCards] = useState([]);
  const [chosenCard, setChosenCard] = useState(card);

  useEffect(() => {
    resetSeenCards();
  }, []);

  function resetSeenCards() {
    setSeenCards([]);
  }

function resetGame() {
    setReset(true);
    resetSeenCards();
    setCard(null);
    setGameOver(false);
  }

  function startGame() {
    if (gameOver) {
      resetGame();
      return;
    }

    let unseenCards = cardFrontData.filter((card) => !seenCards.includes(card.id));
    if (unseenCards.length === 0) {
      resetGame();
      return;
    }

    let randomNumber = Math.floor(Math.random() * unseenCards.length);
    setChosenCard(unseenCards[randomNumber]);
    setCard(chosenCard.id - 1);
    setSeenCards([...seenCards, chosenCard.id]);
  }

  function handleAnswer(answer) {
    if (gameOver) {
      resetGame();
      return;
    }
    if (answer === seenCards.includes(card + 1) || answer === seenCards.includes(card - 1)) {
      setScore((prevScore) => ({ ...prevScore, high: prevScore.high + 1 }));
      setScore((prevScore) => ({ ...prevScore, current: prevScore.current + 1 }));
    } 
      if (score.current === 10) {
        resetGame();
      }
       else {
        startGame();
      }
    } 
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>MEMORY CARD GAME</h1>
      </header>
      <ScoreBoard
        score={score.current}
        highScore={score.high}
        gameOver={gameOver}
        reset={reset}
        
        card={card}
      />
      <div className="game-container">
        <div className="card-container">
          <Card onClick={startGame} card={card} gameOver={gameOver} chosenCard={chosenCard}/>
        </div>
        <div className="play-area-container">
          <PlayArea onClick={handleAnswer} resetGame={resetGame} card={card} gameOver={gameOver} chosenCard={chosenCard}  />
        </div>
      </div>
    </div>
  );
}

export default App;