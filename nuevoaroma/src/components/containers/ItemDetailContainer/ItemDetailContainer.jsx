import { useEffect, useState } from "react";
import { obtenerProductosId } from "../async";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    
    const {itemId} = useParams()

    useEffect(() => {
        obtenerProductosId(itemId)
            .then(response => {
                setProducto(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]);

    return (
        <div className="ItemDetailContainer">
            {producto && <ItemDetail prod={producto} />}
        </div>
    );
};


export default ItemDetailContainer;