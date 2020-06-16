import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
import logo from "./images/logo.png"
import {  faSignOutAlt, faFileAlt, faHome, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Nav = ({role, isLoggedIn}) => {


	return (
        <nav className='Navbar'>
            <div className='Logo-container'>
                <img alt='logo' src={logo} className='Logo' />
            </div>

            {isLoggedIn ? (
                <ul className='Navbar-links'>
                    <NavLink to='/mood-home' className='navlinks'>
                        Home
                        <FontAwesomeIcon icon={faHome} className='nav-icon' />
                    </NavLink>

                    <NavLink to='/documents' className='navlinks'>
                        Documents
                        <FontAwesomeIcon
                            icon={faFileAlt}
                            className='nav-icon'
                        />
                    </NavLink>

                    {role === 'Boss' ? (
                        <NavLink to='/results' className='navlinks'>
                            Reports
                            <FontAwesomeIcon
                                icon={faChartLine}
                                className='nav-icon'
                            />
                        </NavLink>
                    ) : null}
                    <NavLink to='/' className='navlinks'>
                        Logout
                        <FontAwesomeIcon
                            icon={faSignOutAlt}
                            className='nav-icon'
                        />
                    </NavLink>
                </ul>
            ) : null}
        </nav>
    );
};

export default Nav;
