import React from "react";
import PropTypes from "prop-types";
import classes from "../styles/MoodScore.module.css";

const MoodScore = props => {
	const { message } = props;
	return (
		<div className={classes.MoodScore}>
			<h3>Thank you for selecting you mood!</h3>
			<p>
				If you have any concerns or feelings about work then please let us know
				below. We need your input to allow us to keep making this place a great
				place to work. Thank you
			</p>
			<textarea type="text" onChange={message} name="message" />
			<input
				type="checkbox"
				id="toggle"
				className={classes.Checkbox}
				onClick={props.toggle}
			/>
			<label htmlFor="toggle" className={classes.Switch}></label>
			{props.anon ? (
				<span>This message will be sent anonymously</span>
			) : (
				<span>
					This message will include your details, click to send anonymously
				</span>
			)}
			<button onClick={props.send}>Send</button>
		</div>
	);
};
MoodScore.propTypes = {
	message: PropTypes.func
};

export default MoodScore;
