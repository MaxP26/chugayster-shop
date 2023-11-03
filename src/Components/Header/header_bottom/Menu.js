import { Link } from "react-router-dom";
import Style from './Menu.module.css'
function Menu(props){
    const menuList=[
        {text:"Home",url:"/"},
        {text:"Categories",url:"/Category", className:Style.collapser},
        {text:"Contacts",url:"/Contact"},
        {text:"Cart",url:"/Cart"},
        {text:"Delivery payment",url:"/DeliveryPayment"},
        {text:"About us",url:"/About"},
    ];
    return(<div className={Style.menu}>
    {menuList.map(item=><Link  key={crypto.randomUUID()} className={`${Style.menuButton} ${item.className}`} to={item.url}>{item.text}</Link>)}
    
    </div>);
}
export default Menu;