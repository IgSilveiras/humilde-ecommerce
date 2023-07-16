import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import './ItemDetail.scss'


export const ItemDetail = ( {id, nombre, categoria, precio, fabricante, img} ) => {

    const { addToCart, isInCart } = useContext(CartContext)

    const HandleAgregar = ({...producto}) => {
        const item = {
            id,
            nombre, 
            precio,
            img,
            cantidad: 1
        }

        addToCart(item)
        Toastify({
            text: "Se agregó al carrito",
            duration: 2500,
            newWindow: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: false,
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
    }


    return (
        <div className='ItemDetail'>
            <img src={img} alt="nombre" />
            <h3>{nombre}</h3>
            <h4>Precio: ${precio}</h4>
            <p>Categoria: {categoria}</p>
            <p>Fabricante: {fabricante}</p>

            {
                isInCart(id)
                    ? <button onClick={HandleAgregar} className="btn">Agregar otro al carrito</button>
                    : <button onClick={HandleAgregar} className="btn">Agregar al Carrito</button>
            }
        </div>
    )
}