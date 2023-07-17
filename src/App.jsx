import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart"
import { Checkout } from "./components/Checkout/Checkout";
import "./styles/style.scss"


function App() {
    return (
        <CartProvider>
            <BrowserRouter>

                <Header />
                <h1>E-Commerce Humilde</h1>
                <hr />

                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:prodId" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={ <Checkout />} />
                </Routes>

            </BrowserRouter>

        </CartProvider>
    )
}


export default App