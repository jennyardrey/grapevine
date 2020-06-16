import React from 'react';
import Button from '@material-ui/core/Button';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import { DialogContent } from '@material-ui/core';

import '../styles/WelcomeDialog.css'




const WelcomeDialog = (props) => {
    
    const { onClose,  open } = props;

    const handleClose = () => {
        onClose(false);
    };

 
    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby='simple-dialog-title'
            open={open}
        >
            <DialogTitle id='title' >
                Welcome to Grapevine.
            </DialogTitle>
            <DialogContent>
                <div className='WelcomeDialog'>
                    <p>
                        We are dedicated to making your work life as enjoyable
                        and stress free as possible, and believe one way this
                        can be achieved is by better communication.
                    </p>

                    <p>
                        Got feedback for your employer? Feeling annoyed or
                        stressed about something? Want to anonymously let your
                        employer know about something youre concerned about? Or
                        do you simply want to let them know they're doing a
                        great job and you're feeling pretty good?
                    </p>
                    <p>
                        {' '}
                        On your dashboard you will have the opportunity to make
                        your feelings known - please use the faces to let us
                        know what best describes your mood. You also have the
                        opportunity to leave feedback
                    </p>
                    <div>
                        <Button variant='contained' className='btn' onClick={handleClose}>
                            Click to view dashboard
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default WelcomeDialog;


