import React from 'react';
import '../styles/MoodScoreCard.css'
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
	const minusPercentage = 360 - percentage;

	return < div className="mood-score-card-inner" >
		{percentage} %
				</div >

}

export default MoodScoreCard;
