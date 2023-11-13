import React from "react";
import "./hero.css";
import PhotoGrid from "../../Assets/HeroSection-bg-image.jpg";
// I know that the placement is a little off
function Hero() {
  return (
    <section className="hero-section">
    <img src={PhotoGrid} className="hero-photo" alt="map" />
      <h1 className="hero-header">Welcome to the travel blog!</h1>
      <h2 className="hero-text">Where I have traveled to places lol</h2>
      <p className="hero-descript">The website says stuff on it!</p>
    </section>
  );
}

export default Hero;