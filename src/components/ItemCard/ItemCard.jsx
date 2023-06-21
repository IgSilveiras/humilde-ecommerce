import { Link } from 'react-router-dom'
import './ItemCard.scss'


export const ItemCard = ({ prod }) => {

    return (
        <div className='ItemCard'>
            <img src={prod.img} alt={prod.nombre} />

            <h3>{prod.nombre}</h3>
            <h4>${prod.precio}</h4>

            <button><Link to={`/item/${prod.id}`}>Detalles</Link></button>
        </div>
    )
}