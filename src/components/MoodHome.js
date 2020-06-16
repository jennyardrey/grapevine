import React, { Fragment } from "react";
import Faces from "./Faces";
import DocumentsWidget from "./DocumentsModule"
import SendMessage from "./SendMessage";
import "../styles/MoodHome.css"
import WelcomeDialog from './WelcomeDialog'
import Footer from './Footer'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


const MoodHome = props => {
	const { modal, modalClose, name } = props;
	
	
    
	
	
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
                        <h3>Covid-19 Updates</h3>
                        <p>Due to the current pandemic, lorem50</p>
                        <DocumentsWidget />
                    </div>
                    <div className='begin-prompt'>
                        <h1>Let's Begin</h1>
                        <ArrowDownwardIcon className='arrow'/>
                    </div>
                </div>
                <Faces click={props.click} />
                <SendMessage
                    message={props.message}
                    send={props.submitMessage}
                    toggle={props.toggle}
                    anon={props.anon}
                    messageSent={props.messageSent}
                />
                <div className='step-3'>
                    <div className='step-title'>
                        <h1>Step Three</h1>
                    </div>
                </div>
            </Fragment>

            <Footer />
        </div>
    );
};
export default MoodHome;
