import React from "react";
import "../App.css";

export default function ScoreBoard(props) {
  // const [score, setScore] = useState(Number(localStorage.getItem("score")) || 0);
  // const [best, setBest] = useState(Number(localStorage.getItem("best")) || 0);

  // function updateScore(newScore) {
  //   setScore(newScore);
  //   localStorage.setItem("score", newScore.toString());

  //   if (newScore > best) {
  //     setBest(newScore);
  //     localStorage.setItem("best", newScore.toString());
  //   }
  // }

  return (
    <div className="score-board">
      <h4>Answer correctly to earn points.</h4>
      <h4>Game ends when you reach 10 points or get one wrong.</h4>
      <h4>Click on the image to start.</h4>
      <h5 className="score-board-text">
        Score: {props.score} Best: {props.highScore}
      </h5>
    </div>
  );
}