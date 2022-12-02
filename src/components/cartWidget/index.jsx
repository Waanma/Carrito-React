import React from "react";
import './styles.css';

const Button = ({text, onHandlerClick}) => {
    return (
        <button onClick={onHandlerClick} className="carritoContenedor">
        <div className="carrito">
        <img src="https://cdn-icons-png.flaticon.com/512/6218/6218416.png" alt="carrito" />
        <div className="cartNumber-contenedor">
            <span className="cartNumber">0</span>
             </div>
        </div>
    </button>
    )
}

export default Button;