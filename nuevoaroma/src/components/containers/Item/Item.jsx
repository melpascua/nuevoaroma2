import { Link } from 'react-router-dom';
import './item.css'

const Item = ({ productos }) => {
    return (
        <>
            {
                productos.map((prod) =>
                    <div className='producto'>
                        <img src={prod.imagen} alt={prod.nombre} />
                        <h2>{prod.nombre} {prod.precio}$</h2>
                        <Link to={`/item/${prod.id}`}>Información</Link>
                    </div>
                )
            }
        </>
    )
}

export default Item;