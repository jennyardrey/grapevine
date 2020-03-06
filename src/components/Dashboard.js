import '../styles/moodScore.css'
import React, { Component } from 'react';
import Axios from 'axios';
import MessageCard from '../components/MessageCard'
import MoodScoreCard from '../components/MoodScoreCard'


class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
			moodScore: [],
			messages: [],
			bossmood: 0,
			assistantmood: 0,
			supervisormood: 0
		}

	}

	componentDidMount() {

		Axios.get('https://boiling-meadow-46426.herokuapp.com/moods/messages')
			.then(response => {
				this.setState({
					messages: response.data,
				})
			})
			.catch(err => console.log(err))

		Axios.get('https://boiling-meadow-46426.herokuapp.com/moods')
			.then(response => {
				let score = [];
				response.data.map(res => {
					return score.push(res.moodScore)
				});
				this.setState({ moodScore: score })
			})


	}
	render() {
		return (

			<div>
				{
					this.state.moodScore && this.state.moodScore.length > 0 ?

						<MoodScoreCard
							moodScore={this.state.moodScore} />
						: <div className="error">You currently have no mood</div>
				}

				<div className="messages">
					<h2>Staff messages</h2>
					{
						this.state.messages && this.state.messages.length > 0 ?
							this.state.messages.map(message => (
								<MessageCard key={message._id}
									{...message} />
							)) : <div className="error">You currently have no messages</div>
					}
				</div>
			</div >
		);

	}
}

export default Dashboard;
