import './ItemCard.scss'


export const ItemCard = ({prod}) => {

    return (
        <div className='ItemCard' key={prod.id}>
            <img src={prod.img} alt={prod.nombre} />

            <div className='prodDetails'>
                <h3>{prod.nombre}</h3>
                <h4>${prod.precio}</h4>
            </div>

            <button className='detailsBtn'>Detalles</button>
        </div>
    )
}