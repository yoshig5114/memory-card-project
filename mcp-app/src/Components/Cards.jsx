import React, { useState} from "react";
import romeCardBack from "../assets/romeCard.jpg";
import cardOne from "../assets/cardOne.jpg";
import cardTwo from "../assets/cardTwo.jpg";
import cardThree from "../assets/cardThree.jpg";
import cardFour from "../assets/cardFour.jpg";
import cardFive from "../assets/cardFive.jpg";
import cardSix from "../assets/cardSix.jpg";
import cardSeven from "../assets/cardSeven.jpg";
import cardEight from "../assets/cardEight.jpg";
import cardNine from "../assets/cardNine.jpg";
import cardTen from "../assets/cardTen.jpg";

export const cardFrontData = [
    { id: 1, name: "one", image: cardOne, seen: false },
    { id: 2, name: "two", image: cardTwo, seen: false },
    { id: 3, name: "three", image: cardThree, seen: false },
    { id: 4, name: "four", image: cardFour, seen: false },
    { id: 5, name: "five", image: cardFive, seen: false },
    { id: 6, name: "six", image: cardSix, seen: false },
    { id: 7, name: "seven", image: cardSeven, seen: false },
    { id: 8, name: "eight", image: cardEight, seen: false },
    { id: 9, name: "nine", image: cardNine, seen: false },
    { id: 10, name: "ten", image: cardTen, seen: false },
  ];

  export default function Card({ onClick }) {
    const [cardIndex, setCardIndex] = useState(null);
    const [cardFront, setCardFront] = useState(cardFrontData);
  
    function handleCardClick() {
        if (cardIndex !== null) {
          onClick(cardFrontData[cardIndex].id);
        } else {
          onClick(null);
        }
    
        let unseenCards = cardFront.filter((card) => !card.seen);
        if (unseenCards.length === 0) {
          // Handle game over logic
          return;
        }
        const randomIndex = Math.floor(Math.random() * unseenCards.length);
        const chosenCard = unseenCards[randomIndex];
    
        const updatedCardFront = cardFront.map((card) =>
          card.id === chosenCard.id ? { ...card, seen: true } : card
        );
        setCardFront(updatedCardFront);
    
        setCardIndex(chosenCard.id);
      }
    
      return (
        <div className="card-container">
          <img
            className="card"
            alt="card"
            src={cardIndex === null ? romeCardBack : cardFront[cardIndex].image}
            onClick={handleCardClick}
          />
        </div>
      );
    }