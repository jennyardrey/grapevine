import React, { Component } from "react";

import "./styles/LoginDesign.css";

import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import MoodHome from "./components/MoodHome";
import axios from "axios";


import Dashboard from "./components/Dashboard";
import Documents from "./components/Documents";
import Nav from './components/Nav';


class App extends Component {
	state = {
		moodData: {
			userId: null,
			name: null,
			role: null,
			moodScore: null,
			message: null
		},
		isLoggedIn: false,
		facesClicked: false,
		anon: false,
		messageSent: false,
		modalClose: true,
		messages: [
			{
				message: `- I know it's a scary time right now, and we
                                    are all having to get used to a new type of work
                                    style and environment, which makes it harder
                                    for me to know how you are all coping. Please use this tool to help us communicate during these unique times.`,
				sender: 'The Manager',
			},
			{
				message: `- There will be some new starters in the coming weeks to elp with our workload. Please help them out if they need it, and don't forget to leave any feedback below.`,
				sender: 'Human Resources',
			},
		],
		count: 2
	};


	notificationsHandler = (ind) => {
		const messages = [...this.state.messages]
		const removedMess = messages.splice(ind, 1)
		this.setState({
			messages: messages,
			count: this.state.count ? this.state.count - 1 : 0
		})
	}

	componentDidUpdate(prevProps, prevState) {
		const moodscore = {
			moodScore: this.state.moodData.moodScore,
			user: this.state.moodData.userId,
			role: this.state.moodData.role
		};

		if (
			this.state.moodData.moodScore !== prevState.moodData.moodScore &&
			this.state.moodData.userId
		) {
			console.log("app componentdidupdate has run");
			axios
				.post("https://boiling-meadow-46426.herokuapp.com/user/mood", moodscore)
				.then(response => console.log(response));
		}
	}
	// login handler which creates a new user
	loginHandler = () => {
		const user = {
			name: this.state.moodData.name,
			role: this.state.moodData.role
		};
		axios
			.post("https://boiling-meadow-46426.herokuapp.com/user", user)
			.then(response => {
				const userId = response.data._id;
				this.setState({
					moodData: {
						...this.state.moodData,
						userId: userId
					},
					isLoggedIn: true
				});
			})
			.catch(error => console.log(error));
	};
	//used for inputs made on login page
	inputChangeHandler = event => {
		this.setState({
			moodData: {
				...this.state.moodData,
				[event.target.name]: event.target.value
			}
		});
	};

	// moodscore from faces component
	moodScoreHandler = event => {
		const moodScore = Number(event.target.name);
		this.setState({
			moodData: {
				...this.state.moodData,
				moodScore: moodScore
			},

			facesClicked: true
		});
	};

	//submit message on button click
	submitMessageHandler = () => {
		this.setState({
			messageSent: true
		})
		let message = {
			message: this.state.moodData.message,
			user: this.state.moodData.userId
		};
		if (this.state.anon === true) {
			message = {
				message: this.state.moodData.message
			};
		}
		if (this.state.moodData.message && this.state.moodData.userId) {
			axios
				.post(
					"https://boiling-meadow-46426.herokuapp.com/user/message",
					message
				)
				.then(response => console.log(response))
				.catch(error => console.log(error));
		} else {
			console.log(message);
		}
	};

	onToggleHandler = () => {
		this.setState({
			anon: !this.state.anon
		});
	};

	onModalClose = () => {
		console.log('hello')
		this.setState({
			modalClose: false
		})
	}
	render() {
		return (
			<div className='App'>
				<Nav role={this.state.moodData.role} isLoggedIn={this.state.isLoggedIn} />
				<Switch>
					<Route
						exact
						path='/'
						render={(props) => (
							<Login
								{...props}
								input={this.inputChangeHandler}
								login={this.loginHandler}
							/>
						)}
					/>


					<Route
						exact
						path='/mood-home'
						render={(props) => (
							<MoodHome
								{...props}
								name={this.state.moodData.name}
								click={this.moodScoreHandler}
								faces={this.state.facesClicked}
								message={this.inputChangeHandler}
								submitMessage={this.submitMessageHandler}
								toggle={this.onToggleHandler}
								anon={this.state.anon}
								messageSent={this.state.messageSent}
								role={this.state.moodData.role}
								modal={this.state.modalClose}
								modalClose={this.onModalClose}
								count={this.state.count}
								notificationsHandler={this.notificationsHandler}
								messages={this.state.messages}

							/>
						)}
					/>
					<Route
						exact
						path='/results'
						render={(props) => (
							<Dashboard
								{...props}
								role={this.state.moodData.role}
							/>
						)}
					/>
					<Route
						exact
						path='/documents'
						render={(props) => (
							<Documents
								{...props}
								role={this.state.moodData.role}
							/>
						)}
					/>
				</Switch>

			</div>
		);
	}
}
export default App;
