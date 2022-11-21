import React, {useState} from "react";
import "./Main.css";

const type = [
  "Lifestyle",
  "Game",
  "Productivity",
  "Social",
  "Utility",
  "News",
];

const platform = [];
const genre = [];

export default function Main() {
    const [currentType, setCurrentType] = useState("")
    const [currentPlatform, setCurrentPlatform] = useState("")
    const [currentGenre, setCurrentGenre] = useState("")

  const handleButtonClick = (e) => {
    console.log("Click")
    generateRandomChoices()
  }

  function generateRandomChoices() {
    setCurrentType(type[randomInt(0, type.length-1)]);
    setCurrentPlatform(platform[randomInt(0, platform.length-1)]);
    setCurrentGenre(genre[randomInt(0, platform.length-1)])
  }


  return (
    <div className="main">
      <div className="container">
        <div className="item">{currentType}</div>
        <div className="item">{currentGenre}</div>
        <div className="item">{currentPlatform}</div>
      </div>
      <button className="button" onClick={handleButtonClick} >CLICK</button>
    </div>
  );
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
