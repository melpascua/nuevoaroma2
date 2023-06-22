import './ItemListContainer.css';
import { obtenerProductos, obtenerProductosPorCategoria } from '../async';
import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';

import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../../main';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { categoriaId } = useParams()

    useEffect(() => {
        const CollectionRef = categoriaId ? query(collection(db, 'Items'), where('categoria', '==', categoriaId)) : collection(db, 'Items');

        getDocs(CollectionRef)
            .then(response => {
                console.log('Respuesta de Firestore:', response);

                const productosAdaptados = response.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });

                console.log('Productos adaptados:', productosAdaptados);

                setProductos(productosAdaptados);
            })
            .catch(error => {
                console.error(error);
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