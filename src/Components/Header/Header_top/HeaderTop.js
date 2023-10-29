import Info from "./Info";
import Style from './HeaderTop.module.css'
import Socials from "./Socials";
function HeaderTop(props){
    return(<div className={Style.headertop}>
    <Info/>
    <Socials/>
    </div>);
}
export default HeaderTop;