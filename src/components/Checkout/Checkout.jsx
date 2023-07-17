import { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import './Checkout.scss'


export const Checkout = () => {

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const [idCompra, setIdCompra] = useState(null)

    const { cart, totalPrice, emptyCart } = useContext(CartContext)

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length === 0) {
            alert("Verificar los campos")
        }

        if (values.direccion.length === 0) {
            alert("Verificar los campos")
        }

        if (values.email.length === 0) {
            alert("Verificar los campos")
        }

        const compra = {
            cliente: values,
            fecha: new Date,
            items: cart,
            total: totalPrice()
        }

        const comprasRef = collection(db, "compras")
        addDoc(comprasRef, compra)
            .then((doc) => {
                setIdCompra(doc.id)
            })
            
    }

    if (cart.length === 0) {
        return <Navigate to='/' />
    }

    if (idCompra) {

        return (
            <div className='endScreen'>
                <h2>Tu compra se realizó exitosamente!</h2>
                <h4>Id de tu compra: {idCompra}</h4>

                <Link><button className='btn complete' onClick={emptyCart}>Volver al Inicio</button></Link>
            </div>
        )
    }

    return (
        <div className='Checkout'>
            <h2>Checkout</h2>
            <p>Total: $<span>{totalPrice()}</span></p>

            <h3>Ingresá tus datos para la facturación y el envío</h3>
            <form onSubmit={handleSubmit}>
                <input
                    value={values.nombre}
                    type="text"
                    placeholder='Nombre Completo'
                    onChange={handleInputChange}
                    name='nombre'
                />

                <input
                    value={values.direccion}
                    type="text"
                    placeholder='Dirección'
                    onChange={handleInputChange}
                    name='direccion'
                />

                <input
                    value={values.email}
                    type="email"
                    placeholder='Email'
                    onChange={handleInputChange}
                    name='email'
                />

                <div className='btnsDiv'>
                    <Link><button className='btn empty'>Volver al Carrito</button></Link>

                    <button className='btn complete' type='submit'>Finalizar Compra</button>
                </div>
            </form>
        </div>
    )
}