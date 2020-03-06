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

	return <div className="mood-score-graphic">
		<CircularProgressbar
			value={percentage}
			text={`${percentage}%`}
			styles={{
				root: {},
				path: {
					stroke: `rgba(38, 70, 83, ${percentage / 100})`,
					strokeLinecap: 'butt',
					// transform: 'rotate(0.25turn)',
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
				}
			}}
		/>
	</div>

}

export default MoodScoreCard;
