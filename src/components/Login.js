import React from "react";
import { Link } from "react-router-dom";
import "../styles/LoginDesign.css";
import image from "./images/halftone-yellow/halftone-yellow.png";

const login = props => {
	const { handleOnSubmit } = props;

	return (
		<div>
			<h1>Grapevine</h1>

			<img src={image} alt="image" />

			<form className="name" onSubmit={handleOnSubmit}>
				Name:
				<input
					className="nameBox"
					type="text"
					onChange={props.input}
					name="name"
				/>
			</form>
			<div></div>

			<form className="role">
				Role:
				<input
					className="departmentBox"
					type="text"
					onChange={props.input}
					name="role"
				/>
				<div></div>
				<button type="submit" onClick={props.login}>
					<Link to="/mood-home">Enter</Link>
				</button>
			</form>
		</div>
	);
};

export default login;
