import { NavBar } from "../NavBar/NavBar";
import { CartWidget } from "../CartWidget/CartWidget";
import "./Header.scss"



export const Header = () => {
    return (
    <header className='header'>
        <a href="#" className="header__logo"><img src="react.svg" alt="logo" /></a>

        <NavBar />

        <CartWidget />
    </header>
)}