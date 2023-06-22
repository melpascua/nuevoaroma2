import { useEffect, useState } from "react";
import { obtenerProductosId } from "../async";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../../main';



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    
    const {itemId} = useParams()

    useEffect(() => {

        const docRef = doc(db, 'Items', itemId)

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productosAdaptados = { id: response.id, ...data}
            setProducto(productosAdaptados)
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