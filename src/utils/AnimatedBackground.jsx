import React, { useEffect } from "react";
import Navigation from "../components/main/Navigation";

// Function to generate a random number between min and max
const getRandom = (min, max) => Math.random() * (max - min) + min;

const AnimatedBackground = () => {
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    const rounds = Math.floor(getRandom(10, 40));

    for (let i = 0; i < rounds; i++) {
      const round = document.createElement("div");
      round.classList.add("round");

      const position = getRandom(0, 100);
      const delay = getRandom(2, 30);

      round.style.left = `${position}%`;
      round.style.animationDelay = `${delay}s`;

      wrapper.appendChild(round);
    }
  }, []);

  return (
    <div>
      <div className="wrapper"></div>
    </div>
  );
};

export default AnimatedBackground;
