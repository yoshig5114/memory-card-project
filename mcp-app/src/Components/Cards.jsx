import React from "react";
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



export default function Card() {
    function reset(){
        const cardBack = {name: "rome", image: romeCardBack};
        const cardFront = [
        {id:1, name:"one", image: cardOne, seen:false},
        {id:2, name:"two", image: cardTwo, seen:false},
        {id:3, name:"three", image: cardThree, seen:false},
        {id:4, name:"four", image: cardFour, seen:false},
        {id:5, name:"five", image: cardFive, seen:false},
        {id:6, name:"six", image: cardSix, seen:false},
        {id:7, name:"seven", image: cardSeven, seen:false},
        {id:8, name:"eight", image: cardEight, seen:false},
        {id:9, name:"nine", image: cardNine, seen:false},
        {id:10, name:"ten", image: cardTen, seen:false},
        ]
    }
    function shuffle(cardFront) {
        for (let i = cardFront.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardFront[i], cardFront[j]] = [cardFront[j], cardFront[i]];
        }
        return cardFront;
    }
        

  return (
    
      <div className="card-container">
          <img className="card" img alt={card.name} src={card.image}></img>
      </div>
   
  );
}
