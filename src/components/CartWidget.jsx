import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return ('')
    }

    return (
        <Link to={'/cart'} className="btn fondoNaranja position-relative" title='Ir al carrito'>
            <img src={"/images/cart3.svg"} alt="imagen-carrito" width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link>
    )
}

export default CartWidget;