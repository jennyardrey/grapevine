import React, { Fragment } from "react";
import Faces from "./Faces";
import DocumentsWidget from "./DocumentsModule"
import SendMessage from "./SendMessage";
import "../styles/MoodHome.css"
import Nav from "../components/Nav";


const MoodHome = props => {
	return (
		<div>
			<Nav role={props.role} />
			{props.faces ? (
				<SendMessage
					message={props.message}
					send={props.submitMessage}
					toggle={props.toggle}
					anon={props.anon}
					messageSent={props.messageSent}
				/>
			) : (
					<Fragment>
						<div className="main-text">
							<h2>Welcome to Grapevine.</h2>
							<p>We are dedicated to making your work life as enjoyable and stress free as possible, and believe one way this can be achieved is by better communication.</p>
							<p>
								<p>Got feedback for your employer? Feeling annoyed or stressed about something? Want to anonymously let your employer know about something youre concerned about? Or do you simply want to let them know they're doing a great job and you're feeling pretty good?</p>
								Select the face below that best represents your mood at
								work at the moment, and you'll have the opportunity to leave feedback (anon or not) for your employer.
					</p>
						</div>
						<Faces click={props.click} />
						<DocumentsWidget />
					</Fragment>
				)}
		</div>
	);
};
export default MoodHome;
