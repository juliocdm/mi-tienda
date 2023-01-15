import React, {useContext} from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {

    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="row my-5">
            <div className="col-md-6 offset-md-3 text-center">
                <img className="img-fluid" src={item.imagen} alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p><b>${item.precio}</b></p>
            </div>
            <ItemCount stock={item.stock} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail;