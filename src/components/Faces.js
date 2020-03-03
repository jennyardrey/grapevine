import React from "react";
import PropTypes from "prop-types";
import classes from "../style/Faces.module.css";

const faces = props => {
	const { click } = props;

	return (
		<div className={classes.Faces}>
			<button>
				<img
					onClick={click}
					src="http://pngimg.com/uploads/smiley/smiley_PNG113.png"
					alt=""
					name="1"
				/>
			</button>
			<button>
				<img
					src="http://pngimg.com/uploads/smiley/smiley_PNG113.png"
					alt=""
					onClick={click}
					name="2"
				/>
			</button>
			<button>
				<img
					src="http://pngimg.com/uploads/smiley/smiley_PNG111.png"
					alt=""
					onClick={click}
					name="3"
				/>
			</button>
			<button>
				<img
					src="http://pngimg.com/uploads/smiley/smiley_PNG110.png"
					alt=""
					onClick={click}
					name="4"
				/>
			</button>
			<button>
				<img
					src="http://pngimg.com/uploads/smiley/smiley_PNG86.png"
					alt=""
					onClick={click}
					name="5"
				/>
			</button>
		</div>
	);
};

faces.propTypes = {
	click: PropTypes.func
};

export default faces;
