import React, { useEffect, useState, useContext } from "react";
import {Link} from "react-router-dom";
import Axios from "axios";
import {AuthContext} from './../../../contexts/AuthContext';

export default (props) => {
	const auth = useContext(AuthContext);
    const [up, setUp] = useState(props.value1);
    const [down, setDown] = useState(props.value2);
	
	const style1 = {
		width: up + down == 0 ? "50%" : parseInt(up * 100 / (up + down)) + "%"
	};
	
	const style2 = {
		width: up + down == 0 ? "50%" : parseInt(down * 100 / (up + down)) + "%"
	};
	
	const sendThumbUp = () => {
		const token = auth.user.token;
		const url = `${process.env.REACT_APP_API_URL}/api/votes`;
		const person = {
		  personsId: props.id,
		  thumb: true,
		  userId: auth.user.id
		};
		Axios.post(url, person, {
		  headers: {
			"content-type": "application/json",
			"x-access-token": token,
		  },
		}).then((response) => {
			setUp(up + 1);
			alert(response.data.resp);
		});
	};
	
	const sendThumbDown = () => {
		const token = auth.user.token;
		const url = `${process.env.REACT_APP_API_URL}/api/votes`;
		const person = {
		  personsId: props.id,
		  thumb: false,
		  userId: auth.user.id
		};
		Axios.post(url, person, {
		  headers: {
			"content-type": "application/json",
			"x-access-token": token,
		  },
		}).then((response) => {
			setDown(down + 1);
			alert(response.data.resp);
		});
	};
	
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
          
				<a className="thumbUp" onClick={() => {
					sendThumbUp();
				}}></a>
				<a className="thumbDown" onClick={() => {
					sendThumbDown();
				}}></a>
			</div>
			<div className="bar1" style={style1}></div>
			<div className="bar2" style={style2}></div>
			<div className="value1">{up + down == 0 ? 50 : parseInt(up * 100 / (up + down))}</div>
			<div className="value2">{up + down == 0 ? 50 : parseInt(down * 100 / (up + down))}</div>
        </article>
    );
};
