
import React, { Component } from "react";
import './styles/LoginDesign.css'
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import MoodHome from "./components/MoodHome";
import MoodScore from "./components/MoodScore";
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
		isLoggedin: false,
		facesClicked: false
	};


	loginHandler = () => {
		const user = {
			name: this.state.data.name,
			role: this.state.data.role
		};
		axios
			.post("https://boiling-meadow-46426.herokuapp.com/user", user)
			.then(response => {
				const userId = response.data._id;
				this.setState({
					data: {
						...this.state.data,
						userId: userId
					},
					isLoggedIn: true
				});
			});
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
