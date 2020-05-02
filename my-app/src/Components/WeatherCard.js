import React from "react";

const WeatherCard = (props) => {
  return (
    <div className="classContainer">
      <h2 className="title">Your Weather</h2>
      <div className="cardContainer">
        <div className="class-card">
          <h3>City: {props.name}</h3>
          <p>Currently: {props.description}</p>
          <p>Temp: {props.temp}</p>
          <p>Feels Like: {props.feels_like} </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
