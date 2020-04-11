import React from "react";
import "../styles/ThankYou.css";
import { Link } from "react-router-dom"
const ThankYou = () => {
	return (
		<div className="thankyou-message">
			<h2 className="thankyou-text">
				Thank you for your input. We take our employee feedback seriously.
				Please lookout for our next update.
			</h2>
			<div className="back-btn">
				<Link to="/">Back to Login</Link>
			</div>
		</div>
	);
};

export default ThankYou;
