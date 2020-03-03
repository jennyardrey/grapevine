import React, { Component } from "react";
import "./styles/LoginDesign.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import MoodHome from "./components/MoodHome";
import MoodScore from "./components/MoodMessage";
import axios from "axios";

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
		facesClicked: false
	};
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
			});
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

	//message input handler
	messageChangeHandler = event => {
		console.log("hello");
		this.setState({
			moodData: {
				...this.state.moodData,
				[event.target.name]: event.target.value
			}
		});
	};
	render() {
		return (
			<div className="App">
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
								message={this.messageChangeHandler}
							/>
						)}
					/>
					<Route exact path="/results" component={MoodScore} />
				</Switch>
			</div>
		);
	}
}
export default App;
