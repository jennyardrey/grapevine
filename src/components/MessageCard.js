import React from 'react';
import '../styles/MessageCard.css'
const MessageCard = (props) => {
	const {
		message,
		user
	}
		= props;

	const name = (user) ? user.name : 'Anon';
	return <div className="message-card">
		<div className="message">
			{message} </div>

		<div className="username">
			- {name}
		</div>
	</div>

}

export default MessageCard;
