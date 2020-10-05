import React from "react";
import { Route, Link } from "react-router-dom";
import items from "./items.json";
   
export default () => {
  return (
    <nav className="menu">
		
      <ul className="items">
        {items &&
          items.map((item) => (
            <li className="item">
              <Link className="link" to={item.link}>
                {item.text}
              </Link>
            </li>
          ))}
        <li className="item">
          <Link className="link" to="/signup">
            Sign Up
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/signin">
            Sign In
          </Link>
        </li>
        <li className="item">
          <div className="search"></div>
        </li>
      </ul>
    </nav>
  );
};
