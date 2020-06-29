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
				<div className='step-title'>
					<h1>Step Three</h1>
				</div>
				<h2>Feeling stressed? We've put together some things that could help you feel a bit more relaxed at work and at home.</h2>
				<div className="resource-menu">

					<div><button className="small-screen-1" onClick={() => this.showResource("talk")}>Talking</button></div>
					<div><button className="small-screen-2" onClick={() => this.showResource("music")}>Music</button>
					</div>
					<div><button className="small-screen-3" onClick={() => this.showResource("meditate")}>Meditating</button>
					</div>
					<div><button className="small-screen-4" onClick={() => this.showResource("call")}>Can't talk to someone at work?</button>
					</div>
				</div>
				<CSSTransition
					in={this.state.talk}
					timeout={350}
					classNames="resource-animation"
				>
					<CSSTransition
						in={this.state.music}
						timeout={350}
						classNames="resource-animation"
					>
						<CSSTransition
							in={this.state.meditate}
							timeout={350}
							classNames="resource-animation"
						>
							<CSSTransition
								in={this.state.call}
								timeout={350}
								classNames="resource-animation"
							>

								<div className="resource-content">
									{(this.state.talk) ? <p>Sometimes we just need to talk it out! Find someone at work who can sympathise with your concerns, or find someone at home who can lend an ear whilst you get some things off your chest. Articulating your worries can sometimes help understand them better, or perhaps even let them go.</p> : (this.state.music) ? <div><p>Listening to music can be an extremely effective stress-management tool. Why not try these relaxing playlists on Spotify, or put on your favourite jams and kick back.</p><p><a href="https://open.spotify.com/playlist/7ozIozDp260fjNOZy1yzRG?si=xrNuflhhRO6Wbj8NMaMyNQ" target="_blank" rel="noopener noreferrer">Chillout 2020 on Spotify <i className="arrow" class="fas fa-long-arrow-alt-right"></i></a><br></br><a href="https://open.spotify.com/playlist/37i9dQZF1DX1IeqVkK7Ebc?si=IHy4cbTYSdOjoHpFjmcT-A" target="_blank" rel="noopener noreferrer">Chillout Pop Hits on Spotify <i className="arrow" class="fas fa-long-arrow-alt-right"></i></a><br></br><a href="https://open.spotify.com/playlist/37i9dQZF1DX6FdIcKzUp2r?si=Ln_CVA4SQP2rhmijacrlZg" target="_blank" rel="noopener noreferrer">Chill 80's on Spotify <i className="arrow" class="fas fa-long-arrow-alt-right"></i></a></p></div> : (this.state.meditate) ? <div><p>Meditating doesnt have to be reserved for a serene moment by a lake in the forest, and isnt just for yogis. You can meditate anywhere, and sometimes it's helpful to take 5 or 10 minutes out of a busy day to collect your thoughts, and find a bit of calm in the chaos. There's lots of apps on the market to help people meditate, but we like Headspace. Follow the link for information about meditating for beginners, including a free 11 minute meditation you can try right now.</p><p><a href="https://www.headspace.com/meditation/meditation-for-beginners" target="_blank" rel="noopener noreferrer">Meditation for beginners <i className="arrow" class="fas fa-long-arrow-alt-right"></i></a></p></div> : (this.state.call) ? <div><p>More often than not, if something is bothering you at work, your direct leaders will be able to help. In a situation where you can't talk to someone at work, there are helplines where you can call anoymously and get advice from trained professionals. Find out more information about those here.</p><p>ACAS are an independant government funded group that provide impartial advice for emplyees and employers on everything from contracts and hours, sickness, wellbeing and workplace problems. <a href="https://www.acas.org.uk/advice" target="_blank" rel="noopener noreferrer">Visit their advice page <i className="arrow" class="fas fa-long-arrow-alt-right"></i></a></p></div> : null}
								</div>
							</CSSTransition>
						</CSSTransition>
					</CSSTransition>
				</CSSTransition>
			</div>
		);
	}
}

export default Resources;