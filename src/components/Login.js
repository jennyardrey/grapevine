import React from "react";
import '../styles/LoginDesign.css'
import image from './images/halftone-yellow/halftone-yellow.png'

const login = props => {
  const { handleOnSubmit } = props;

  return (
    <div>
      <h1>Grapevine</h1>

      <img src={image} alt="image" />

      <form className="name" onSubmit={handleOnSubmit}>
        Name:
<input className="nameBox" type="text" />
      </form>
      <div></div>

      <form className="role" >
        Role:
<input className="departmentBox" type="text" />

        <div></div>
        <button type="submit">
          Enter
    </button>
      </form>

    </div>

  );

};

export default login;
