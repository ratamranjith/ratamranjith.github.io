import React from "react";
import { Link } from "react-router-dom";
import "../../../public/assets/css/Navigation.css";

const Navigation = () => {
  return (
    <div class="navigation">
      <nav className="pb-px pt-6 flex justify-center">
        <ul className="flex space-x-10 dark:text-white text-black font-semibold text-xl">
          <li>
            <Link to="/index" className=" dark:hover:text-yellow-200  menu-box">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className=" dark:hover:text-yellow-200  menu-box"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to="/interests" className=" hover:text-yellow-200  menu-box">
              Interests
            </Link>
          </li>

          <li>
            <Link to="/contact" className=" hover:text-yellow-200  menu-box">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/resume" className=" hover:text-yellow-200  menu-box">
              Download Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
