import React, { Component } from "react";
import "../styles/Resources.css"
import { CSSTransition } from "react-transition-group";

class Resources extends Component {
	constructor() {
		super();
		this.state = {
			talk: false,
			music: false,
			meditate: false,
			call: false
		}
	}

	showResource(type) {
		this.setState({
			talk: false,
			music: false,
			meditate: false,
			call: false
		})
		this.setState({ [type]: true });


	}

	render() {


		return (
			<div className="resource-page">
				<div className={'step-title'}>
					<h1>Step Three</h1>
				</div>
				<h2>Feeling stressed? We've put together some things that could help you feel a bit more relaxed at work and at home.</h2>
				<div className="resource-menu">

					<div><button onClick={() => this.showResource("talk")}>Talking.</button></div>
					<div><button onClick={() => this.showResource("music")}>Music.</button>
					</div>
					<div><button onClick={() => this.showResource("meditate")}>Meditating.</button>
					</div>
					<div><button onClick={() => this.showResource("call")}>Can't talk to someone at work?</button>
					</div>
				</div>
				<CSSTransition
					in={this.state.talk || this.state.meditate || this.state.music || this.state.call}
					timeout={350}
					classNames="resource-animation"
					unmountOnExit>
					<div className="resource-content">
						{(this.state.talk) ? <p>Sometimes we just need to talk it out! Find someone at work who can sympathise with your concerns, or find someone at home who can lend an ear whilst you get some things off your chest. Articulating your worries can sometimes help understand them better, or perhaps even let them go.</p> : (this.state.music) ? <p>Listening to music can be an extremely effective stress-management tool. Why not try these relaxing playlists on Spotify, or put on your favourite jams and kick back.</p> : (this.state.meditate) ? <p>Meditating doesnt have to be reserved for a serene moment by a lake in the forest, and isnt just for yogis. You can meditate anywhere, and sometimes it's helpful to take 5 or 10 minutes out of a busy day to collect your thoughts, and find a bit of calm in the chaos. There's lots of apps on the market to help people meditate, but we like Headspace. Follow the link for information about meditating for beginners, incuding a free 11 minute meditation you can try right now.</p> : (this.state.call) ? <p>More often than not, if something is bothering you at work, your direct leaders will be able to help. In a situation where you can't talk to someone at work, there are helplines where you can call anoymously and get advice from trained professionals. Find out more information about those here.</p> : null}
					</div>
				</CSSTransition>
			</div>
		);
	}
}

export default Resources;

{ }