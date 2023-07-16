import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "./CartWidget.scss"


export const CartWidget = () => {

    const { itemsInCart } = useContext(CartContext)

    return (
        <div className='CartWidget'>
            <Link className='header__cartBtn' to='/cart'> <FontAwesomeIcon icon={faCartShopping} /> <span>{itemsInCart()}</span> </Link>
        </div>
    )
}