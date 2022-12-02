import React from "react";
import './styles.css';

const Sidebar = ({children, onClose, isOpen}) => {
    return (
        
        <div 
        className="sidebar"
        style={{
            transform: isOpen ? 'translateY(9%)' : 'translateY(100%)'
        }}
        >
            <div className="close-button-container">
                <button onClick={onClose} className="close-button">X</button>
            </div>
            {children}
            <ul>
                <li>
                    <a href="#">Producto 1</a>
                </li>
                <li>
                    <a href="#">Producto 2</a>
                </li>
                <li>
                    <a href="#">Producto 3</a>
                </li>
                <li>
                    <a href="#">Producto 4</a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;