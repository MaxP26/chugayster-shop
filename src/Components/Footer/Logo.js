import Img from "../Elements/Img";
import ChLogo from "../Elements/ChLogo";
import Style from "./Logo.module.css";
function Logo(props){
    return(<>
    <ChLogo className={Style.logo}/>
    </>);
}
export default Logo;