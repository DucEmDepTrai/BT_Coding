import React from "react";

function Card({ name, learningClass, slogan = "Chưa có slogan" }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Lớp: {learningClass}</p>
      <p>
        <em>"{slogan}"</em>
      </p>
    </div>
  );
}

export default Card;
