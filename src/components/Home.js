import React from "react";
import { name, city, image } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (
  <div id="home">
    <h1 style={{"color" : "firebrick"}}>{`${name} is a Web Developer from ${city}`}</h1>
    <p>Hello my name is Sohail</p>
    <img src={image} alt="I made this" />
  </div>
    );
}

export default Home;
