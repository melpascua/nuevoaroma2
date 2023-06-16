import './ItemListContainer.css';
import { obtenerProductos, obtenerProductosPorCategoria } from '../async';
import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { categoriaId } = useParams()

    useEffect(() => {
        const funcionAsincronica = categoriaId ? obtenerProductosPorCategoria : obtenerProductos

        funcionAsincronica(categoriaId)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            });
    }, [categoriaId]);

    return (
        <main>
            <div className='contenedor-tienda'> 
                <Item productos={productos} />
            </div>
        </main>
    );
};

export default ItemListContainer;