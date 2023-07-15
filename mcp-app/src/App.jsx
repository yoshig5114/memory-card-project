
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
  const [card, setCard] = useState(cardFrontData[0]);
  const [chosenCard, setChosenCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState(cardFrontData);
  console.log(card)

  useEffect(() => {
    setSelectedCard(card);
    console.log(card)
  }, [card]);

  function resetSeenCards() {
    const updatedCards = cards.map((card) => ({ ...card, seen: false }));
    setCards(updatedCards);
  }

  function resetGame() {
    score.current = 0;
    setReset(true);
    setChosenCard(null);
    setGameOver(false);
    resetSeenCards();
    chooseCard(cards);
  }

  function startGame() {
    console.log(card);
    if (gameOver) {
      resetGame();
      return;
    }
    chooseCard(cards);
    setChosenCard(card)
    console.log(card)
  }

  function chooseCard(cards) {
    let randomNumber = Math.floor(Math.random() * 10);
    const randomCard = cards[randomNumber];
    setCard(randomCard);
    const updatedCards = cards.map((card) => ({ ...card, seen: true }));
    setCards(updatedCards)
  }

  function checkAnswer(answer) {
    console.log(card)
    if (gameOver) {
      resetGame();
      return;
    }
    if (answer === card.seen) {
      //const updatedCards = cards.map((card) => ({ ...card, seen: true }));
      setScore((prevScore) => ({ ...prevScore, current: prevScore.current + 1 }));
      if (score.current >= score.high) {
        setScore((prevScore) => ({ ...prevScore, high: prevScore.high + 1 }));
      }
      chooseCard(cards);
      console.log(card)
    } else {
      resetGame();
    }
    if (score.current === 9) {
      resetGame();
    }
  }

  // useEffect(() => {
  //   if (selectedCard) {
  //     setChosenCard(selectedCard);
  //     setCard(selectedCard)
  //   }
  // }, [selectedCard, setSelectedCard, setChosenCard, setCard]);

  // function resetSeenCards() {
  //   const updatedCards = cards.map((card) => ({ ...card, seen: false }));
  //   setCards(updatedCards);
  // }

  // function resetGame() {
  //   score.current = 0;
  //   setReset(true);
  //   setChosenCard(null);
  //   setGameOver(false);
  //   resetSeenCards();
  //   chooseCard(cards);
  // }

  // function startGame() {
  //   console.log(card);
  //   if (gameOver) {
  //     resetGame();
  //     return;
  //   }
  //   setSelectedCard(card);
  // }

  // function chooseCard(cards) {
  //   let randomNumber = Math.floor(Math.random() * 10);
  //   const randomCard = cards[randomNumber];
  //   setCard(randomCard);
  //   setSelectedCard(null);
  // }

  // function checkAnswer(answer) {
  //   if (gameOver) {
  //     resetGame();
  //     return;
  //   }
  //   if (answer === card.seen) {
  //     const updatedCards = cards.map((card) =>({ ...card, seen: true }));
  //     setScore((prevScore) => ({ ...prevScore, current: prevScore.current + 1 }));
  //     if (score.current >= score.high) {
  //       setScore((prevScore) => ({ ...prevScore, high: prevScore.high + 1 }));
  //     }
  //     //setSelectedCard(card)
  //     setCards(updatedCards)
  //     //setSelectedCard(card)
  //     chooseCard(cards);
  //     setSelectedCard(card);
  //     console.log(card)
  //   } else {
  //     resetGame();
  //   }
  //   if (score.current === 9) {
  //     resetGame();
  //   }
  // }

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
          <Card onClick={startGame} card={card} gameOver={gameOver} chosenCard={chosenCard} startGame={startGame}/>
        </div>
        <div className="play-area-container">
          <PlayArea onClick={checkAnswer}  resetGame={resetGame} card={card} gameOver={gameOver} chosenCard={chosenCard} />
        </div>
      </div>
    </div>
  );
}

export default App;