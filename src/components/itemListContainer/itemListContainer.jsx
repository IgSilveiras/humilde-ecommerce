import "./ItemListContainer.scss"

export const ItemListContainer = (props) => {
    return (
    <section className="ItemListContainer">
        <h1>E-Commerce Humilde</h1>
        <hr />
        <h2>{props.greeting}</h2>
    </section>
)}