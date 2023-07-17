import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"



export const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])
    const { categoryId } = useParams()

    useEffect (() => {
        const productsRef = collection(db, "productos")
        const q = categoryId
            ? query(productsRef, where("categoria", "==", categoryId))
            : productsRef

        getDocs(q)
            .then((resp) => {
                const items = resp.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setProductos(items)
            })
    }, [categoryId])

    

    return (
        <section className="ItemListContainer">

            <ItemList prods={productos}/>
            
        </section>
    )
}