import React from "react";
import {Link} from "react-router-dom";

export default (props) => {
    return (
        <article className="item">
			<div className="image"  style={
				{
					background: `url(${props.srcimg})`, 
					backgroundPosition: 'center', 
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}
			}>
				<div className="title">{props.title}</div>
				<div className="category">{props.category}</div>
				<div className="text">{props.text}</div>
			</div>
			<div className="value1">{props.value1}</div>
			<div className="value2">{props.value2}</div>
        </article>
    );
};
