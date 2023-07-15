import React from 'react';

export default function PlayArea({ onClick }) {
   function handleAnswer(answer) {
   if(onClick){
    onClick(answer);
   }
  }

  return (
    <div className="playArea">
      <h5>Have you seen this number during this game?</h5>
      <button onClick={() => handleAnswer(true)}>YES</button>
      <button onClick={() => handleAnswer(false)}>NO</button>
    </div>
  );
}