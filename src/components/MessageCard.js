import React from 'react';
import '../styles/MessageCard.css'
const MessageCard = (props) => {
	const {
		message,
		user,
		_id }
		= props;
	return <div className="message-card">
		{console.log(message)}
		{message}

	</div>

}

export default MessageCard;
