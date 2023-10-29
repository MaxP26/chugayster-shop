import React from "react";
import HeaderTop from "./Header_top/HeaderTop";
import HeaderMiddle from "./header_midle/HeaderMiddle";
import HeaderBottom from "./header_bottom/HeaderBottom";
import style from './Header.module.css'
function Header(props){
    return(<header className={style.header}>
        <HeaderTop/>
        <HeaderMiddle/>
        <HeaderBottom/>
    </header>)
}
export default Header;