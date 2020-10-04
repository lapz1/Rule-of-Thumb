import React from "react";
import Menu from "./menu";
import "./style.scss";

export default () => {
  return (  
    <header className="header">
	  <div className="trasnparent"></div>
      <div className="container">
        <Menu />
        <div className="division">
            <h1 className="title">
            Rule of Thumb.
            </h1>
        </div>
      </div>
    </header>
  );
};
