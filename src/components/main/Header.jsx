import React from "react";
import ThemeToggle from "./ThemeToggle";
import Navigation from "./Navigation";
import "../../utils/AnimatedBackground.css";
import AnimatedBackground from "../../utils/AnimatedBackground";

const Header = () => {
  return (
    <>
      <Navigation />
      <ThemeToggle />
    </>
  );
};

export default Header;
