import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Header.css';

function Header(){
  return(
    <div className = "headerDiv">
      <img className = "headerLogo" src = {require("../assets/images/facebook-1.png")} />
      <div className = "headerProfile">
        <span>Meu perfil</span>
        <FontAwesomeIcon className="icon" icon = {faUserCircle}/>
      </div>
    </div>
  );
}

export default Header;