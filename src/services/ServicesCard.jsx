import React from "react";
import "./services-card.css";

const ServicesCard = ({ item }) => {
  const { imgURL,title,desc } = item;
  return (
    <div className="services__item">
      <div className="services__img">
        <img src={imgURL} alt="" />
      </div>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
}

export default ServicesCard;