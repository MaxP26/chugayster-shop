import Menu from "./Menu";
import Style from './HeaderBottom.module.css'
function HeaderBottom(props){
    return(<div className={Style.headerBottom}>
    <Menu/>
    </div>);
}
export default HeaderBottom;