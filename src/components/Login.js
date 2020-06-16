import React from "react";
import { Link } from "react-router-dom";
import "../styles/LoginDesign.css";
import logo from "./images/logo.png"

const login = props => {
	const { handleOnSubmit } = props;

	return (
        <div className='login-page'>
            <img src={logo} alt='logo' />
            <h1>Grapevine</h1>

            <div className='login-form'>
                <form className='login' onSubmit={handleOnSubmit}>
                    <div className='input-container'>
                        <input
                            className='nameBox form-item'
                            type='text'
                            onChange={props.input}
                            name='name'
                            required
                            autoComplete='off'
                        />
                        <label className='form-item'>Name</label>
                    </div>
                    <div className='input-container'>
                        <input
                            className='departmentBox form-item'
                            type='text'
                            onChange={props.input}
                            name='role'
                            required
                            autoComplete='off'
                        />
                        <label className='form-item'>Role</label>
                    </div>
                    <button
                        className='btn form-item'
                        type='submit'
                        onClick={props.login}
                    >
                        <Link to='/mood-home'>Enter</Link>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default login;
