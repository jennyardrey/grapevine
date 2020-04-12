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
			bossmood: [2, 4, 5, 4],
			assistantmood: [1, 2, 3, 2],
			supervisormood: [2, 3, 4, 5]
		}

	}

	componentDidMount() {

		Axios.get('https://boiling-meadow-46426.herokuapp.com/messages')
			.then(response => {

				this.setState({
					messages: response.data,
				})
			})
			.catch(err => console.log(err))

		Axios.get('https://boiling-meadow-46426.herokuapp.com/moods')
			.then(response => {
				this.setState({ results: response.data })
				let score = [];
				response.data.map(res => {
					return score.push(res.moodScore)
				});
				this.setState({ moodScore: score })
			})
		Axios.get(`https://boiling-meadow-46426.herokuapp.com/moods/Boss`)
			.then(response => {
				let bossScore = [];
				response.data.map(res => {
					return bossScore.push(res.moodScore)
				});
				this.setState({ bossmood: bossScore })
			})
		Axios.get(`https://boiling-meadow-46426.herokuapp.com/moods/Assistant`)
			.then(response => {
				let AssistantScore = [];
				response.data.map(res => {
					return AssistantScore.push(res.moodScore)
				});
				this.setState({ assistantmood: AssistantScore })
			})
		Axios.get(`https://boiling-meadow-46426.herokuapp.com/moods/Supervisor`)
			.then(response => {
				let supervisorScore = [];
				response.data.map(res => {
					return supervisorScore.push(res.moodScore)
				});
				this.setState({ supervisormood: supervisorScore })
			})
	}

	render() {

		return (
			<div>
				<div className="main-score">

					{
						this.state.moodScore && this.state.moodScore.length > 0 ?
							< MoodScoreCard
								moodScore={this.state.moodScore}
								scoreName="Staff Happiness Score" />
							: <div className="error">You currently have no mood</div>
					}
					<p>Overall Staff Happiness Score</p>
				</div>


				<div className="role-breakdown">
					<div>
						<MoodScoreCard
							moodScore={this.state.bossmood}
							scoreName="Boss's Happiness Score" />
						<p>Boss's Happiness Score</p>
					</div>
					<div>
						<MoodScoreCard
							moodScore={this.state.assistantmood}
							scoreName="Assistant's Happiness Score" />
						<p>Assistant's Happiness Score</p>
					</div>
					<div>
						<MoodScoreCard
							moodScore={this.state.supervisormood}
							scoreName="Supervisor's Happiness Score" />
						<p>Supervisor's Happiness Score</p>
					</div>
				</div>
				<div className="messages">
					<h2>Staff messages</h2>
					{
						this.state.messages && this.state.messages.length > 0 ?
							this.state.messages.map(message => (
								<MessageCard key={message._id}
									message={message.message} user={message.user} />
							)) : <div className="error">You currently have no messages</div>
					}
				</div>
			</div >

		);

	}
}

export default Dashboard;
