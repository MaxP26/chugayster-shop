import { Link } from "react-router-dom";
import Style from './Menu.module.css'
function Menu(props){
    return(<div className={Style.menu}>
    <Link className={Style.menuButton} to="/">Home</Link>
    <Link className={Style.menuButton} to="/Product">CardProduct</Link>
    <Link className={Style.menuButton} to="/Category">Category</Link>
    <Link className={Style.menuButton} to="/Contact">Contact</Link>
    <Link className={Style.menuButton} to="/Cart">Cart</Link>
    <Link className={Style.menuButton} to="/DeliveryPayment">DeliveryPayment</Link>
    </div>);
}
export default Menu;