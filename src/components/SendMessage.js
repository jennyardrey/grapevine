
import React from "react";
import PropTypes from "prop-types";
import classes from "../styles/SendMessage.module.css";
import ThankYou from "../components/ThankYou"

const SendMessage = props => {
	const { message } = props;
	return (
        <div>
            {props.messageSent === false ? (
                <div className={classes.MoodScore}>
                    <div className={classes['step-title']}>
                        <h1>Step 2</h1>
                    </div>
                    <p>
                        We know you can't always describe your moods in just one
                        image so here you can a little more room to express
                        yourself, please use this responsibly and
                        constructively.
                        <p>You can also use this if you have issues that don't necessarily fit into mood but overall work place environment</p>
                    </p>
                    <textarea type='text' onChange={message} name='message' />
                    <input
                        type='checkbox'
                        id='toggle'
                        className={classes.Checkbox}
                        onClick={props.toggle}
                    />
                    <label htmlFor='toggle' className={classes.Switch}></label>
                    {props.anon ? (
                        <span>This message will be sent anonymously</span>
                    ) : (
                        <span>
                            This message will include your details, click to
                            send anonymously
                        </span>
                    )}
                    <button onClick={props.send}>Send</button>
                </div>
            ) : (
                <div className='thankyou-messaage'>
                    <ThankYou />
                </div>
            )}
        </div>
    );
};
SendMessage.propTypes = {
	message: PropTypes.func
};

export default SendMessage;

