import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./cartWidget.scss"


export const CartWidget = () => <button className="header__cartBtn"><FontAwesomeIcon icon={faCartShopping} />  <span>0</span></button>