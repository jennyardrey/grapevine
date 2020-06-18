import React, { Fragment } from "react";
import Faces from "./Faces";
import DocumentsWidget from "./DocumentsModule"
import SendMessage from "./SendMessage";
import Resources from "./Resources"
import "../styles/MoodHome.css"
import WelcomeDialog from './WelcomeDialog'
import Footer from './Footer'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';


const MoodHome = props => {
	const {
		modal,
		modalClose,
		name,
		count,
		messages,
		notificationsHandler,
	} = props;



	const removeMessage = (index) => {
		notificationsHandler(index);
	};

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

				<div className='section-container'>
					<h1 className='section-welcome-message'>Welcome {name}</h1>
					<div className='notification-bulitin'>
						<Badge
							color='secondary'
							badgeContent={count}
							className='badge'
						>
							<MailIcon style={{ fontSize: 40 }} />
						</Badge>
						<h3>Team Updates</h3>
						<div className='email-notification'>
							{count ? (
								messages.map((mess, index) => {
									return (
										<div
											className='col-email'
											key={index}
											onClick={() => removeMessage(index)}
										>
											<p>{mess.message}</p>
											<p style={{ fontStyle: 'italic' }}>
												{mess.sender}
											</p>
										</div>
									);
								})
							) : (
									<p>No new notifications</p>
								)}
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
					<Resources />
				</div>
			</Fragment>

			<Footer />
		</div>
	);
};
export default MoodHome;
