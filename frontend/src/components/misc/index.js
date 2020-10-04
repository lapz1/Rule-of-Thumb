import React from 'react';
import Item from "./item";
import "./style.scss";
import background1 from './../../assets/images/Kanye.png'
import background2 from './../../assets/images/Mark.png'
import background3 from './../../assets/images/Cristina.png'
import background4 from './../../assets/images/Malala.png'

export default () => {
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
					<Item srcimg={background1} category="Entertainment" value="64" title="Kanye West" text="Is an American rapper, record producer, and fashion designer. Throughout his career, West has been responsible for cultural movements and musical progressions within mainstream hip-hop and popular music at large." />
					<Item srcimg={background2} category="Business" value="36" title="Mark Zuckerberg" text="Is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Facebook, Inc. and serves as its chairman, chief executive officer, and controlling shareholder." />
					<Item srcimg={background3} category="Politics" value="36" title="Cristina Fernández de Kirchner" text="Is an Argentine lawyer and politician who has served as the Vice President of Argentina since 2019. She also previously served as President of Argentina from 2007 to 2015 and the First Lady during her husband, Néstor Kirchner's tenure." />
					<Item srcimg={background4} category="Entertainment" value="64" title="Malala Yousafzai" text="is a Pakistani activist for female education and the youngest Nobel Prize laureate." />
				</div>
				<div className="box-botton">
					<div className="box-right">Submit a Name</div>
					<div className="box-left">Is there anyone else you would want us to add?</div>
				</div>
            </div>
        </section>
    );
};
