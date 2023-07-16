import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './ItemInCart.scss'


export const ItemInCart = ( {item} ) => {

    const {removeFromCart} = useContext(CartContext)

    return (
        <div className='ItemInCart'>
            <img src={item.img} alt={item.nombre} />

            <div className='detailsDiv'>
                <p>{item.nombre}</p>

                <div>
                    <p>Precio: ${item.precio} x {item.cantidad}</p>
                    <p className='subtotalP'>Subtotal: ${item.precio * item.cantidad}</p>
                </div>
            </div>

            <button onClick={() => removeFromCart(item.id)} className='deleteBtn'><FontAwesomeIcon icon={faTrashCan} /></button>

        </div>
    )
}