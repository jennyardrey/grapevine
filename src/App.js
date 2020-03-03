import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import MoodHome from "./components/MoodHome";
import MoodScore from "./components/MoodScore";

class App extends Component {
	state = {
		moodData: {
			userId: null,
			name: null,
			role: null,
			moodScore: null,
			message: null
		},
		isLoggedin: false,
		facesClicked: false
	};

	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" render={props => <Login {...props} />} />

					<Route
						exact
						path="/mood-home"
						render={props => <MoodHome {...props} />}
					/>
					<Route exact path="/results" component={MoodScore} />
				</Switch>
			</div>
		);
	}
}
export default App;
