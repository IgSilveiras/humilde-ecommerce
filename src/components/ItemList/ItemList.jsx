import { ItemCard } from '../ItemCard/ItemCard'
import './ItemList.scss'


export const ItemList = ({ prods }) => {
    return (
        <div className='ItemList'>

            <h2>Productos</h2>

            <section className='productos'>

                {prods.map((prod) => (
                    <ItemCard prod={prod} />
                ))}

            </section>
        </div>
    )
}