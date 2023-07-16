import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const addToCart = (item) => {
        if (isInCart(item.id)) {
            const index = cart.findIndex(items => items.id === item.id);
            cart[index].cantidad++
            setCart([...cart])
        } else setCart([...cart, item])
    }

    const itemsInCart = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
    }

    const removeFromCart = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const emptyCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addToCart, isInCart, itemsInCart, totalPrice, removeFromCart, emptyCart}}>
            {children}
        </CartContext.Provider>
    )
}