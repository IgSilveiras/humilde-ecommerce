import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemInCart } from '../ItemInCart/ItemInCart'
import './Cart.scss'


export const Cart = () => {
    const { cart, emptyCart, totalPrice, itemsInCart } = useContext(CartContext)

    return (
        itemsInCart() === 0
            ? <div className='emptyCart'>
                <h2>El carrito está vacío</h2>
                <Link to='/'><button className='btn complete'>Volver al Inicio</button></Link>
            </div>
            : <div className='CartView'>
                <div className='DetailsDiv'>
                    <h2>Carrito</h2>

                    {cart.map((prod) => (
                        <ItemInCart item={prod} key={prod.id} />
                    ))}
                </div>

                <p className='totalP'>Precio Total: $<span>{totalPrice()}</span></p>

                <button className='btn complete'>Terminar Compra</button>
                <button onClick={emptyCart} className='btn empty'>Vaciar Carrito</button>
            </div>
    )
}