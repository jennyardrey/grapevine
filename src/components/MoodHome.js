import React, { Fragment, useState } from "react";
import Faces from "./Faces";
import DocumentsWidget from "./DocumentsModule"
import SendMessage from "./SendMessage";
import "../styles/MoodHome.css"
import WelcomeDialog from './WelcomeDialog'
import Footer from './Footer'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const MoodHome = props => {
	const { modal, modalClose, name, count, messages, notificationsHandler } = props;
/* 
	const [count, setCount] = useState(2)
	const [messages, setMessages] = useState([
        {
            message: `- I know it's a scary time right now and we
                                    are all having to get to a new type of work
                                    style and environment which makes it harder
                                    for me to know how you are all coping so
									please let me know.`,
            sender: 'Jenny Ardrey',
        },
        {
            message: `- I know it's a scary time right now and we
                                    are all having to get to a new type of work
                                    style and environment which makes it harder
                                    for me to know how you are all coping so
									please let me know.`,
            sender: 'Aenny Jrdrey',
        },
    ]); */
	
	const removeMessage = (index) => {
		notificationsHandler(index)
	}



	const handleClose = (value) => {

		modalClose();
	};
	return (
        <div>
            <Fragment>
                <WelcomeDialog
                    open={modal}
                    onClose={handleClose}
                    disableBackdropClick={true}
                    selectedValue={modal}
                />

                <div className='main-text'>
                    <h1>Welcome {name}</h1>
                    <div className='covid-bulitin'>
                        <Badge color='secondary' badgeContent={count} className='badge'>
							<MailIcon style={{fontSize:40}}/>
                        </Badge>
                        <h3>Team Updates</h3>
                        <div className='email-notification'>
							{count ? messages.map((mess, index) => {
								return (
									<div className='col-email' key={index} onClick={()=>removeMessage(index)}>
                                <p>
											 {mess.message}</p>
											<p style={{fontStyle:'italic'}}>{mess.sender}</p>
                                
                            </div>
								)
							}): <p>No new notifications</p>}
                            
                        </div>

                        <DocumentsWidget />
                    </div>
                    <div className='begin-prompt'>
                        <h1>Let's Begin</h1>
                        <ArrowDownwardIcon className='arrow' />
                    </div>
                </div>
                <Faces click={props.click} facesClicked={props.faces} />
                <SendMessage
                    message={props.message}
                    send={props.submitMessage}
                    toggle={props.toggle}
                    anon={props.anon}
                    messageSent={props.messageSent}
                />
                <div className='step-3'>
                    <div className='step-title'>
                        <h1 className='section-title'>Step Three</h1>
                    </div>
                </div>
            </Fragment>

            <Footer />
        </div>
    );
};
export default MoodHome;
