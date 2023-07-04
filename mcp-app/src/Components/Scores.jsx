import React from "react";
import '../App.css'


export default function ScoreBoard() {
    let score = localStorage.getItem("score");
    let best = localStorage.getItem("best");
    score = score !== null ? score : 0;
    best = best !== null ? best : 0;

    return (
    <div className="score-board">
        <h4>Answer correctly to earn points.</h4>
        <h4>Game ends when you reach 10 points or get one wrong.</h4>
        <h4>Click on the image to start.</h4>
        <h5 className="score-board-text">Score: {'  '+score+'         '} Best: {best+'      '}</h5>
    </div>
  );
} 