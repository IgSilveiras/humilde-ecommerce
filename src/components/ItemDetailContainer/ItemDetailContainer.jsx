import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.scss'



export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const { prodId } = useParams()

    useEffect(() => {
        pedirDatos()
            .then((data) => {
                setProducto((data.find((prod) => prod.id === Number(prodId))))
            })
    }, [prodId])

    return (
        <div className='ItemDetailContainer'>
            <img src={producto.img} alt="producto.nombre" />
            <h2>{producto.nombre}</h2>
            <h3>Precio: ${producto.precio}</h3>
            <p>Categoria: {producto.categoria}</p>
            <p>Fabricante: {producto.fabricante}</p>

            <button>Comprar</button>
        </div>
    )
}