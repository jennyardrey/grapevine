import React from "react";
import PropTypes from "prop-types";

const MoodScore = props => {
	const { message } = props;
	return (
		<div>
			<h1>Mood Score Page</h1>
			<h3>have anything to say...?</h3>
			<p>Please lettuce know</p>
			<textarea type="text" onChange={message} name="message" />
		</div>
	);
};
MoodScore.propTypes = {
	message: PropTypes.func
};

export default MoodScore;
