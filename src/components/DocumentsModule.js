import React from "react";
import "../styles/DocumentsModule.css";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';

const Documents = () => {


	return (
        <div className='doc-module'>
            <p className='doc-mod-text'>
                Find more information regarding what we as a business are doing
                during covid and all other documents relevant to your employment
                here. Find answers to questions, check rules in the code of
                conduct and see company updates.
            </p>
            <NavLink to='/documents' className='navlinks'>
                <Button id='doc-link' variant='contained'>
                    <h2 className="doc-btn">View my documents</h2>
                </Button>
            </NavLink>
        </div>
    );
};

export default Documents;
