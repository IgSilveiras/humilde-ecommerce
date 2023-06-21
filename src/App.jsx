import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import "./styles/style.scss"


function App() {
    return (
        <div>
            <BrowserRouter>

                <Header />
                <h1>E-Commerce Humilde</h1>
                <hr />

                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:prodId" element={<ItemDetailContainer />} />
                </Routes>

            </BrowserRouter>

        </div>
    )
}


export default App