import React from "react";
import "./style.css";

function ScoreDetail(props) {
  return (
    <div className="score">
        <h2>Use the force to not pick the same image twice!</h2>
        <h3>Score: {props.score}</h3>
        <h3>Score: {props.top_score}</h3>
        <p>{props.try_again}</p>
    </div>
  );
}

export default ScoreDetail;
