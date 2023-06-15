import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-7 bg-blue-500">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-white">
          로고
        </Link>
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link to="/home" className="text-white hover:text-red-500">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-red-500">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/todo" className="text-white hover:text-red-500">
              TODO
            </Link>
          </li>
        </ul>
        <div className="flex justify-center gap-5">
          <Link to="/login" className="text-white hover:text-red-500">
            LOGIN
          </Link>
          <Link to="/signup" className="text-white hover:text-red-500">
            SIGNUP
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
