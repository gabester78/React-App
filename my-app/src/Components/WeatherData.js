import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const WeatherData = () => {
  const [form, setForm] = useState({ zipcode: "" });
  const [post, setPost] = useState([]);
  const [post2, setPost2] = useState([]);
  const [post3, setPost3] = useState([]);

  const formSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${form.zipcode}&units=imperial&appid=35b9919d203fa2ddf7575c910e5adbbd`
      )
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
        setPost2(response.data.main);
        setPost3(response.data.weather[0]);
        setForm({
          zipcode: "",
        });
      })
      .catch((err) => console.log(err.response));
  };

  const inputChange = (event) => {
    setForm({ zipcode: event.target.value });
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <div>
          <label htmlFor="zipcode">
            Zipcode:
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              value={form.zipcode}
              onChange={inputChange}
            />
          </label>
        </div>
        <button>Submit</button>
      </form>
      <WeatherCard
        name={post.name}
        description={post3.description}
        temp={post2.temp}
        feels_like={post2.feels_like}
      />
      ;
    </div>
  );
};

export default WeatherData;
