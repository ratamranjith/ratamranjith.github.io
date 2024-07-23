import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-indigo-950 p-6 bg-fixed">
      <ul className="flex space-x-4">
        <li>
          <Link to="/index" className="text-white hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-white hover:text-gray-400">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/interests" className="text-white hover:text-gray-400">
            Interests
          </Link>
        </li>

        <li>
          <Link to="/contact" className="text-white hover:text-gray-400">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/resume" className="text-white hover:text-gray-400">
            Download Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
