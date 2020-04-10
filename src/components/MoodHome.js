import React, { Fragment } from "react";
import Faces from "./Faces";
import MoodScore from "./MoodScore";

const MoodHome = props => {
	return (
		<div>
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
						<h1>How are you feeling today?</h1>
						<p>
							Please select the face that best represents your current mood at
							work
					</p>
						<Faces click={props.click} />
					</Fragment>
				)}
		</div>
	);
};
export default MoodHome;
