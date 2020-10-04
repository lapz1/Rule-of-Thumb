import React from "react";
import {Link} from "react-router-dom";

export default (props) => {
  return (  
	<article className="box">
		<div className="pre-title">What's your opinion on</div>
		<div className="title">{props.title}?</div>
		<div className="text">{props.text}</div>
		<div className="info">More Information</div>
		<div className="question">What's your Verdict?</div>
		<div className="up"></div>
		<div className="down"></div>
	</article>
  );
};
