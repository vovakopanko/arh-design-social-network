import React from "react";
import style from "./Header.module.css";
import MenuContainer from "./Menu/MenuContainer";
import logo from "./../../assets/images/logo.png"

let Header = () => {
  return (
    <nav  className={style.header}>
      <div className={style.header__logo}>
        <img
          src={logo}
          alt="logo"
        ></img>
      </div>
      <div className={style.header__menu}>
        <MenuContainer />
      </div>
    </nav>
  );
};

export default Header;
