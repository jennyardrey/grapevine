import React, { Component } from 'react';
import Axios from 'axios';
import MessageCard from '../components/MessageCard'


class MoodScore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			moodScore: [],
			messages: []
		}
	}
	componentDidMount() {

		Axios.get('http://localhost:3000/moods/messages')
			.then(response => {
				console.log(response.data)
				this.setState({
					messages: response.data,
				})
			})
			.catch(err => console.log(err))
	}
	render() {
		return (
			<div>
				{this.state.messages && this.state.messages.length > 0 ?
					this.state.messages.map(message => (
						<MessageCard key={message._id}
							{...message} />
					)) : <div className="error">You currently have no messages</div>}
			</div>
		);

	}
}

export default MoodScore;
