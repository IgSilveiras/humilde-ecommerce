import "./styles/style.scss"
import { Header } from "./components/header/header";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {
    return (
        <div>
            <Header />

            <h1>E-Commerce Humilde</h1>
            <hr />

            <ItemListContainer/>
        </div>
    )
}


export default App