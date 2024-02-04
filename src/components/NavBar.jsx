import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className="flex flex-row gap-10 justify-end text-xl bg-teal-300 rounded-lg p-2 ">
      <li className="cursor-pointer">
        <Link to="/">Home</Link>
      </li>

      <li className="cursor-pointer">
        <Link to="/about">About</Link>
      </li>
      <li className="cursor-pointer">
        <Link to="/services">Services</Link>
      </li>

      <li className="cursor-pointer">
        <Link to="/contact">Contacts</Link>
      </li>
    </ul>
  );
}

export default NavBar;
