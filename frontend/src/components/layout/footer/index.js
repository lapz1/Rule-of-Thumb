import React from 'react';
import Submenu from "./submenu";
import "./style.scss";

export default () => {
    return (
        <footer className="footer">
			<div className="container">
				<div className="social">
					<div className="follow-us">Follow Us</div>
					<div className="facebook"></div>
					<div className="twitter"></div>
				</div>
				<Submenu />
			</div>
        </footer>
    );
};
