import React from 'react';

const MoodScoreCard = (props) => {
	const {
		moodScore,
	}
		= props;
	return <div>
		{moodScore.reduce((a, b) => {
			return a + b
		})}
		<p>out of</p>
		{moodScore.length * 5}
	</div>

}

export default MoodScoreCard;
