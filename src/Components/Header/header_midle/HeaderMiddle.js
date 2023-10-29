import Search from "./Search";
import Cart from "./Cart";
import Logo from "./Logo";
import Style from './HeaderMiddle.module.css'
function HeaderMiddle(props){
    return(<div className={Style.headerMiddle}>
    <Logo/>
    <Search/>
    <Cart/>
    </div>);
}
export default HeaderMiddle;