import React from "react";
import './styles.css';

const NavBar = ({children}) => {
    return (
    <div className="navBar-container">
        {children}
    </div>
    
    )
}

export default NavBar;