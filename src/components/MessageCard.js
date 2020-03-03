import React from 'react';

const MessageCard = (props) => {
	const {
		message,
		user,
		_id }
		= props;
	return <div>
		{user.role}
		{message}

	</div>

}

export default MessageCard;
