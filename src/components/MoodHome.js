import React, { Fragment } from "react";
import Faces from "./Faces";
import MoodScore from "./MoodScore";
import "../styles/MoodHome.css"
import Nav from "../components/Nav";


const MoodHome = props => {
	return (
		<div>
			<Nav role={props.role} />
			{props.faces ? (
				<MoodScore
					message={props.message}
					send={props.submitMessage}
					toggle={props.toggle}
					anon={props.anon}
					messageSent={props.messageSent}
				/>
			) : (
					<Fragment>
						<div className="main-text">
							<h2>Welcome to Grapevine. How are you feeling today?</h2>
							<p>
								Please select the face that best represents your current mood at
								work at the moment.
					</p>
						</div>
						<Faces click={props.click} />
					</Fragment>
				)}
		</div>
	);
};
export default MoodHome;
