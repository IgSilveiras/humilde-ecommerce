import { useFetch } from "../../hooks/useFetch"
import { ItemList } from "../ItemList/ItemList"


export const ItemListContainer = () => {

    const { res: productos } = useFetch()

    return (
        <section className="ItemListContainer">

            <ItemList prods={productos}/>
        </section>
    )
}