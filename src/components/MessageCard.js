import React from 'react';
import '../styles/MessageCard.css'
const MessageCard = (props) => {
	const {
		message,
		user,
		_id }
		= props;
	return <div className="message-card">
		{message}

	</div>

}

export default MessageCard;
