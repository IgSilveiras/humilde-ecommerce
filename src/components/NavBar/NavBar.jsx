import { Link } from "react-router-dom"
import "./NavBar.scss"

export const NavBar = () => {
    return <nav className='header__nav'>
    <ul>
        <li><Link to="/category/cpu">Procesadores</Link></li>
        <li><Link to="/category/gpu">Tarjetas Gráficas</Link></li>
        <li><Link to="/category/ram">Memorias RAM</Link></li>
    </ul>
</nav>
}