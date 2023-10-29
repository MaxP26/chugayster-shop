import React from "react";
import Style from "./Footer.module.css"
import FooterMenu from "./FooterMenu";
import Logo from "./Logo";
import Social from "./Social";
function Footer(props){
    return(
    <footer className={Style.footer}>
        <Logo/>
        <FooterMenu/>
        <Social/>
    </footer>)
}
export default Footer;