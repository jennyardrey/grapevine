import React from "react";
import "../styles/Documents.css";
import pdficon from "./images/pdficon.png";
import Nav from "./Nav";

const Documents = (props) => {


	return (
		<div className="doc-page">
			<Nav role={props.role} />
			<h2 className="doc-intro-text">Your Documents</h2>
			<p className="doc-intro-text">Here you will find all the documents relevent to your job. This includes the latest weekly bulletin and the latest updates to the busienss in response to COVID-19. These should be check regularly.
			</p>
			<p className="doc-intro-text">	If you wish to make a complaint or dispute something, check your job description and code of conduct first.</p>
			<div className="docs">
				<div className="doc-box">
					<span className="text">
						<h4>Job Description</h4>
						<p>Job description for Assistants.</p>
					</span>
					<img className="pdficon" src={pdficon} alt="pdf-icon" />
				</div>
				<div className="doc-box">
					<span className="text">
						<h4>Code of Conduct</h4>
						<p>Please refer to the code of conduct before lodging complaints.</p>
					</span>
					<img className="pdficon" src={pdficon} alt="pdf-icon" />
				</div>
				<div className="doc-box">
					<span className="text">
						<h4>COVID-19 Company Updates</h4>
						<p>Company wide updates regarding changes in business due to the ongoing global pandemic.</p>
					</span>
					<img className="pdficon" src={pdficon} alt="pdf-icon" />
				</div>
				<div className="doc-box">
					<span className="text">
						<h4>Latest Company Bulletin</h4>
						<p>Read news and important information from this weeks bulletin.</p>
					</span>
					<img className="pdficon" src={pdficon} alt="pdf-icon" />
				</div>
			</div>
		</div>
	);
};

export default Documents;
