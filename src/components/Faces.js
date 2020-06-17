import React from "react";
import PropTypes from "prop-types";
import classes from "../styles/Faces.module.css";
import face1 from "./images/Face1.png"
import face2 from "./images/Face2.png"
import face3 from "./images/Face3.png"
import face4 from "./images/Face4.png"
import face5 from "./images/Face5.png"
import "../styles/ThankYou.css";


const faces = props => {
	const { click } = props;

	return (
        <div className={classes['faces-container']}>
            <div className={classes['step-title']}>
                <h1>Step One</h1>
            </div>
            <div>
                <h1 className={classes['face-header']}>
                    If we don't know, we can't help
                </h1>
                {!props.facesClicked ? <p className={classes['face-paragraph']}>
                    Select a face that best describes how you are feeling today{' '}
                </p> : null}
                
            </div>

            <div>
                {props.facesClicked === false ? (
                    <div className={classes.Faces}>
                        <button>
                            <img onClick={click} src={face1} alt='' name='1' />
                        </button>
                        <button>
                            <img src={face2} alt='' onClick={click} name='2' />
                        </button>
                        <button>
                            <img src={face3} alt='' onClick={click} name='3' />
                        </button>
                        <button>
                            <img src={face4} alt='' onClick={click} name='4' />
                        </button>
                        <button>
                            <img src={face5} alt='' onClick={click} name='5' />
                        </button>
                    </div>
                ) : (
                    <div className={classes['thankyou-message']}>
                        <p>
                            Thank you for your input. Your selection has been
                            recorded and will help your employer keep track of
                            general staff happiness. You'll be able to record
                            your mood again next time, but in the mean time,
                            scroll down to leave more detailed feedback.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

faces.propTypes = {
	click: PropTypes.func
};

export default faces;
