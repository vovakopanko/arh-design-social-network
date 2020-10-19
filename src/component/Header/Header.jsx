import React from "react";
import style from "./Header.module.css";
import MenuContainer from "./Menu/MenuContainer";
import logo from "./../../assets/images/logo.png";
import { useState } from "react";

let Header = () => {
  const [isActive, setActive] = useState(false)
  const [blockScroll, setScroll] = useState(false)
  const toggleClass = () => {
    setActive(!isActive);
    setScroll(!blockScroll);
  }
  return (
    <div className={style.header}>
      <nav className={style.header__body}>
        <div className={style.header__logo}>
          <img src={logo} alt="logo"></img>
        </div>
        <div className={isActive ? style.header__menu_active : style.header__menu}>
          <MenuContainer />
        </div>
        <div className={isActive ? style.header__burger_active : style.header__burger} onClick={toggleClass}>
          <span></span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
