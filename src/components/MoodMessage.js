import React, { Component } from "react";
import Axios from "axios";
import MessageCard from "../components/MessageCard";
import MoodScoreCard from "../components/MoodScoreCard";

class MoodScore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
			moodScore: [],
			messages: [],
			bossmood: 0,
			assistantmood: 0,
			supervisormood: 0
		};
	}

	componentDidMount() {
		Axios.get("https://boiling-meadow-46426.herokuapp.com/moods/messages")
			.then(response => {
				console.log(response.data);
				this.setState({
					messages: response.data
				});
			})
			.catch(err => console.log(err));

		Axios.get("https://boiling-meadow-46426.herokuapp.com/moods").then(
			response => {
				console.log(response);
				let score = [];
				response.data.map(res => {
					console.log(res.moodScore);
					return score.push(res.moodScore);
				});
				console.log(score);
				this.setState({ moodScore: score });
				console.log(this.state.moodScore);
			}
		);
	}
	render() {
		return (
			<div>
				{this.state.moodScore && this.state.moodScore.length > 0 ? (
					<MoodScoreCard moodScore={this.state.moodScore} />
				) : (
					<div className="error">You currently have no mood</div>
				)}

				{this.state.messages && this.state.messages.length > 0 ? (
					this.state.messages.map(message => (
						<MessageCard key={message._id} {...message} />
					))
				) : (
					<div className="error">You currently have no messages</div>
				)}
			</div>
		);
	}
}

export default MoodScore;
