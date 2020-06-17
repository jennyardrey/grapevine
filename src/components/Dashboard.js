import '../styles/moodScore.css'
import React, { Component } from 'react';
import Axios from 'axios';
import MoodScoreCard from '../components/MoodScoreCard'
import Paper from '@material-ui/core/Paper';
import MessageCard from './MessageCard'



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
            <div className='Dashboard-container'>
                {/* <h3>
                    Below you will see the overall score for your staff
                    happiness, and the breakdown for each role.
                </h3> */}
                <h1 className='dashboard-title'>Your Results Dashboard</h1>
                <Paper className='overall-score' elevation={10}>
                    {this.state.moodScore && this.state.moodScore.length > 0 ? (
                        <MoodScoreCard
                            moodScore={this.state.moodScore}
                            scoreName='Staff Happiness Score'
                        />
                    ) : (
                        <div className='error'>You currently have no mood</div>
                    )}
                    <p className='overall-score-label'>
                        Overall Staff Happiness Score
                    </p>
                </Paper>

                <div className='role-score-breakdown-container'>
                    <Paper
                        elevation={10}
                        className='individial-score-card'
                    >
                        <div className='row'>
                            <MoodScoreCard
                                moodScore={this.state.bossmood}
                                scoreName="Boss's Happiness Score"
                            />
                        </div>

                        <p className='card-label'>Boss's Happiness Score</p>
                    </Paper>
                    <Paper
                        className='individial-score-card'
                        elevation={10}
                    >
                        <MoodScoreCard
                            moodScore={this.state.assistantmood}
                            scoreName="Assistant's Happiness Score"
                        />
                        <p className='card-label'>
                            Assistant's Happiness Score
                        </p>
                    </Paper>
                    <Paper
                        className='individial-score-card'
                        elevation={10}
                    >
                        <MoodScoreCard
                            moodScore={this.state.supervisormood}
                            scoreName="Supervisor's Happiness Score"
                        />
                        <p className='card-label'>
                            Supervisor's Happiness Score
                        </p>
                    </Paper>
                </div>
                <div className='messages-container'>
                    <div className='messages-title-container'>
                        <h1 className='messages-title-3'>Staff Messages</h1>
                    </div>
                    <div className='messages'>
                        {this.state.messages &&
                        this.state.messages.length > 0 ? (
                            this.state.messages.map((message) => (
                                <MessageCard
                                    key={message._id}
                                    message={message.message}
                                    user={message.user}
                                />
                            ))
                        ) : (
                            <div className='error'>
                                You currently have no messages
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );

	}
}

export default Dashboard;
