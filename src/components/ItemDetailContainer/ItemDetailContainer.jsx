import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import './ItemDetailContainer.scss'



export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const { prodId } = useParams()

    useEffect(() => {
        const itemRef = doc(db, "productos", prodId)
        getDoc(itemRef)
            .then((doc) => {
                setProducto({...doc.data(), id: doc.id})
            })
    }, [prodId])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...producto} />
        </div>
    )
}