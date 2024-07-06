import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <ThemeToggle/>
      <h1>My Portfolio</h1>
    </header>
  );
};

export default Header;
