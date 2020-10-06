import React, { useState, useEffect } from "react";
import Item from "./item";
import Axios from "axios";
import "./style.scss";
import background1 from './../../assets/images/Kanye.png'
import background2 from './../../assets/images/Mark.png'
import background3 from './../../assets/images/Cristina.png'
import background4 from './../../assets/images/Malala.png'

function Mix() {
	const [items, setItems] = useState("");
	
	const loadItems = () => {		
		setTimeout(()=>{
			const url = `${process.env.REACT_APP_API_URL}/api/persons`;
			Axios.get(url).then((response) => {
				console.log(response.data);
				setItems([...items, ...response.data]);
			});
		}, 500);		
	};

	useEffect(() => {
		loadItems();
	}, []);
  
    return (
        <section className="misc">
            <div className="container">
				<div className="box-top">
					<div className="box-left">Speak out. Be heard. <span className="box-span">Be counted</span></div>
					<div className="box-right">X</div>
					<div className="box-center">Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report.</div>
				</div>
                <div className="votes">Votes</div>
				<div className="items">
					{items && items.map((item) => (
						<Item id={item._id} srcimg={item.imagesrc} category={item.category} value1={item.thumbUp} value2={item.thumbDown} title={item.name} text={item.description} />
					))}
				</div>
				<div className="box-botton">
					<div className="box-right">Submit a Name</div>
					<div className="box-left">Is there anyone else you would want us to add?</div>
				</div>
            </div>
        </section>
    );

}
export default Mix;
