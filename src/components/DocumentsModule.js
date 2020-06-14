import React from "react";
import "../styles/DocumentsModule.css";
import { NavLink } from "react-router-dom";

const Documents = () => {


	return (
		<div className="doc-page">
			<h2 className="doc-intro-text">My Documents</h2>
			<p className="doc-intro-text">Find all the documents relevant to your employment here. Find answers to questions, check rules in the code of conduct, and see company updates.
		</p>
			<NavLink to="/documents" className="navlinks">

				<div id="doc-link">View my documents</div>
			</NavLink>
		</div>
	);
};

export default Documents;
