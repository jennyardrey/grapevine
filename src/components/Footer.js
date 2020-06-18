import React from 'react';
import '../styles/Footer.css'
import logo from "./images/logo.png"


const Footer = () => {
	return (
		<div className='footer'>
			<p className="names">Made by Jenny + Gareth as part of ManchesterCodes <a href="https://www.manchestercodes.com/software-engineer-fasttrack" target="_blank" rel="noopener noreferrer">Software Engineer FastTrack</a></p>
			<p className="links"><a href="www.nowhere.com" target="_blank" rel="noopener noreferrer">Terms</a> + <a href="www.nowhere.com" target="_blank" rel="noopener noreferrer">Privacy</a></p>
		</div>
	);
}

export default Footer;