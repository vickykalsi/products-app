import { NavLink } from "react-router-dom";
import styles from "../stylesheets/navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

function Navbar() {
  const [isVisible,setIsVisible]=useState(false);
  return <>
    <nav>
      <ul className={isVisible?styles.sidebar:styles.hide}>
        <li onClick={()=>setIsVisible(false)}><MdOutlineClose/></li>
        <li><NavLink to="/">home</NavLink></li>
        <li><NavLink to="/add-a-new-product">add a product</NavLink></li>
      </ul>
    </nav>
    <nav>
      <ul className={styles.navContainer}>
        <li>My PERN APP</li>
        <li className={styles.hideOnMobile}><NavLink to="/">home</NavLink></li>
        <li className={styles.hideOnMobile}><NavLink to="/add-a-new-product">add a product</NavLink></li>
        <li className={styles.hideOnMonitor} onClick={()=>setIsVisible(true)}><GiHamburgerMenu/></li>
      </ul>
    </nav>
  </>
}

export default Navbar;