import { useContext, useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemDetail } from '../ItemDetail/ItemDetail'
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
            <ItemDetail {...producto} />
        </div>
    )
}