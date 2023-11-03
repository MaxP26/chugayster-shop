import Search from "./Search";
import HeaderCart from "./Cart";
import Logo from "./Logo";
import Style from './HeaderMiddle.module.css'
function HeaderMiddle(props){
    return(<div className={Style.headerMiddle}>
    <Logo/>
    <Search/>
    <HeaderCart/>
    </div>);
}
export default HeaderMiddle;