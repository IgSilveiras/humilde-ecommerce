import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { pedirDatos } from "../../helpers/pedirDatos"



export const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])
    const { categoryId } = useParams()

    useEffect (() => {
        pedirDatos()
            .then((data) => {
                if (!categoryId) {
                    setProductos(data)
                } else {
                    setProductos(data.filter((prod) => prod.categoria === categoryId))
                }
            })
    }, [categoryId])

    

    return (
        <section className="ItemListContainer">

            <ItemList prods={productos}/>
            
        </section>
    )
}