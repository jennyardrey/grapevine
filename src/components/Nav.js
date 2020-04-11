import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
import logo from "./images/logo.png"


const Nav = props => {
	console.log(props);

	return (
		<div className="navbar">
			<img className="Logo" alt="logo" src={logo} />

			<nav className="NavBar-links">


				<ul className="Links">
					<NavLink to="/" className="navlinks">Logout</NavLink>
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
		</div>
	);
};

export default Nav;
