import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

const Nav = props => {
	console.log(props);
	return (
		<nav className="NavBar">
			<div className="Logo">
				<span>Grapevine</span>
			</div>
			<ul className="Links">
				<NavLink to="/Documents" className="navlinks">
					Documents
				</NavLink>
				{props.role === "Boss" ? (
					<NavLink to="/results" className="navlinks">
						Reports
					</NavLink>
				) : null}
			</ul>
		</nav>
	);
};

export default Nav;
