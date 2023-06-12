import "./styles/style.scss"
import { Header } from "./components/header/header";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {
    return (
        <div>
            <Header />

            <ItemListContainer greeting="Abrimos Pronto"/>
        </div>
    )
}


export default App