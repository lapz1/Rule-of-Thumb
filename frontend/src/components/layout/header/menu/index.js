import React, {useState, useContext} from "react";
import { Route, Link, useHistory } from "react-router-dom";
import items from "./items.json";
   
import {AuthContext} from './../../../../contexts/AuthContext';

export default () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  console.log(auth);
  const logout = () => {
    auth.logout();
    history.push("/");
  };
  
  return (
	!auth.checkAuth() ?  
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
	:
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
				<Link className="link" to="/new">
					Add New
				</Link>
			</li>
			<li className="item">			  
				Welcome Back {auth.user.username}
			</li>
			<li className="item">
			  <Link className="link" to="/logout">
				<span 
					onClick={() => {
					  logout();
					}}
				>
					Logout
				 </span>
			  </Link>
			</li>			  
			<li className="item">
			  <div className="search"></div>
			</li>
		  </ul>
		</nav>
  );
};
