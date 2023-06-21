import { Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { CartWidget } from "../CartWidget/CartWidget";
import "./Header.scss"



export const Header = () => {
    return (
    <header className='header'>
        <Link to="/" className="header__logo"><img src="react.svg" alt="logo" /></Link>

        <NavBar />

        <CartWidget />
    </header>
)}