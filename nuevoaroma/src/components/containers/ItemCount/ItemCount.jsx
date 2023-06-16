import './ItemCount.css';
import { useState } from "react"

const ItemCount = ({stock, inicial, onAdd}) => {
    const [cantidad, setCantidad] = useState(inicial)

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        };
    };

    const reducir = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        };
    };

    return (
        <div>
            <div>
                <button onClick={reducir}> - </button>
                <h2>{cantidad}</h2>
                <button onClick={incrementar}> + </button>
            </div>
            <div>
                <button onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;