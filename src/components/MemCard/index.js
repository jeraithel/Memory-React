import React from "react";
import "./style.css";

function MemCard(props) {
  return (
    <div className="card">
      <div onClick={() => props.selectMem(props.id)} className="img-container">
        <img alt={props.name} src={props.image} />
      </div> 
    </div>
  );
}

export default MemCard;
