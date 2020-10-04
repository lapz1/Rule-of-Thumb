import React from "react";
import { Link } from "react-router-dom";
import items from "./items.json";

export default () => {
  return (
    <nav className="submenu">
      <ul className="items">
        {items &&
          items.map((item) => (
            <li className="item">
              <Link className="link" to={item.link}>
                {item.text}
              </Link>
            </li>
          ))}        
      </ul>
    </nav>
  );
};
