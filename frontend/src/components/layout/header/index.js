import React from "react";
import { Route } from "react-router-dom";
import Menu from "./menu";
import Box from "./box";
import Login from './login';
import Register from './register';
import "./style.scss";

export default () => {
  return (  
    <header className="header">
	  <Route path="/signup" component={Login} />
	  <Route path="/signin" component={Register} />
	  <div className="trasnparent"></div>
      <div className="container">
        <Menu />
        <div className="division">
            <h1 className="title">
            Rule of Thumb.
            </h1>
        </div>
		<Box  title="Pope Francis" text="He's talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)."/>
      </div>
    </header>
  );
};
