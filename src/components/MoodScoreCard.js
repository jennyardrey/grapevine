import React from 'react';
import '../styles/MoodScoreCard.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MoodScoreCard = (props) => {
	const {
		moodScore,

	}
		= props;

	const score = moodScore.reduce((a, b) => {
		return a + b
	})
	const total = moodScore.length * 5
	const percentage = Math.round((score / total) * 100)
	console.log(percentage)
	return <div className="mood-score-graphic">

		{(percentage > 80) ? <div className="score-detail"> This is a top score, keep it up! </div> : (percentage > 50) ? <div className="score-detail">This score is in danger of dropping below average and needs work. Try checking the messages to see if any issues come up, or communicate directly with your staff to find out their concerns.</div> : (percentage > 0) ? <div className="score-detail">This is the kind of score we don't like to see, but it can be rescued! Prompt your staff to record their mood and leave constructive messages more often. Try addressing issues raised in the messages and increase the communication in your team with regular meetings and one on ones to try get to the bottom of their concerns. </div> : <div className="score-detail">You don't have a score yet!</div>
		}
		<CircularProgressbar
			value={percentage}
			text={`${percentage}%`
			}
			styles={{
				root: {},
				path: {
					stroke: `rgba(38, 70, 83, ${percentage / 100})`,
					strokeLinecap: 'butt',
					transform: 'rotate(0.25turn)',
					transformOrigin: 'center center',
				},
				trail: {
					stroke: '#2A9D8F',
					strokeLinecap: 'butt',
					transform: 'rotate(0.25turn)',
					transformOrigin: 'center center',
				},
				text: {
					fill: '#264653',
					fontSize: '20px'
				}
			}}
		/>
	</div>

}

export default MoodScoreCard;
