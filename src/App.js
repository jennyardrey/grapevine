import React, { Component } from "react";

import "./styles/LoginDesign.css";

import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import MoodHome from "./components/MoodHome";
import MoodScore from "./components/MoodMessage";
import axios from "axios";

import Nav from "./components/Nav";

import Dashboard from "./components/Dashboard";


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
		messageSent: false
	};

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
	render() {
		return (
			<div className="App">
				{this.state.isLoggedIn ? <Nav role={this.state.moodData.role} /> : null}
				<Switch>
					<Route
						exact
						path="/"
						render={props => (
							<Login
								{...props}
								input={this.inputChangeHandler}
								login={this.loginHandler}
							/>
						)}
					/>

					<Route
						exact
						path="/mood-home"
						render={props => (
							<MoodHome
								{...props}
								click={this.moodScoreHandler}
								faces={this.state.facesClicked}
								message={this.inputChangeHandler}
								submitMessage={this.submitMessageHandler}
								toggle={this.onToggleHandler}
								anon={this.state.anon}
								messageSent={this.state.messageSent}
							/>
						)}
					/>
					<Route exact path="/results" component={Dashboard} />
				</Switch>
			</div>
		);
	}
}
export default App;
