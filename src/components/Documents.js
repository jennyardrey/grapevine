import React from "react";
import "../styles/Documents.css";
import pdficon from "./images/pdficon.png";
import viewicon from "./images/view.png"

const Documents = (props) => {


	return (
		<div className="doc-page">
			<h2 className="doc-intro-title">Your Documents</h2>
			<p className="doc-intro-text">Here you will find all the documents relevent to your job. This includes the latest weekly bulletin and the latest updates to the business in response to COVID-19. These should be checked regularly.
			</p>
			<p className="doc-intro-text">	If you wish to make a complaint or dispute something, check your job description and code of conduct first.</p>
			<div className="docs">
				<div className="doc-box">
					<span className="text">
						<h4>Job Description</h4>
						<p>Job description for Assistants.</p>
					</span>
					<div className="images">
						<img className="icon" src={viewicon} alt="view-icon" />
						<img className="icon" src={pdficon} alt="pdf-icon" />
					</div>
				</div>
				<div className="doc-box">
					<span className="text">
						<h4>Code of Conduct</h4>
						<p>Please refer to the code of conduct before lodging complaints.</p>
					</span>
					<div className="images">
						<img className="icon" src={viewicon} alt="view-icon" />
						<img className="icon" src={pdficon} alt="pdf-icon" />
					</div>
				</div>
				<div className="doc-box">
					<span className="text">
						<h4>COVID-19 Company Updates</h4>
						<p>Company wide updates regarding changes in business due to the ongoing global pandemic.</p>
					</span>
					<div className="images">
						<img className="icon" src={viewicon} alt="view-icon" />
						<img className="icon" src={pdficon} alt="pdf-icon" />
					</div>
				</div>
				<div className="doc-box">
					<span className="text">
						<h4>Latest Company Bulletin</h4>
						<p>Read news and important information from this weeks bulletin.</p>
					</span>
					<div className="images">
						<img className="icon" src={viewicon} alt="view-icon" />
						<img className="icon" src={pdficon} alt="pdf-icon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Documents;
