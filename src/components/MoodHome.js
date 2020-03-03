import React, { Fragment } from "react";
import Faces from "./Faces";
import MoodScore from "./MoodScore";

const MoodHome = props => {
	return (
		<div>
			{props.faces ? (
				<MoodScore message={props.message} />
			) : (
				<Fragment>
					<h1>How are you feeling today?</h1>
					<Faces click={props.click} />
				</Fragment>
			)}
		</div>
	);
};
export default MoodHome;
