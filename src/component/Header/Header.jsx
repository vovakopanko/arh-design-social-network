import React from "react";
import style from "./Header.module.css";
import MenuContainer from "./Menu/MenuContainer";

let Header = (props) => {
  return (
    <nav className={style.head}>
      <div className={style.logo}>
        <img
          src="https://www.nordicinnovation.org/sites/default/files/inline-images/Nordisk%20Innovation%20Logotype%20RGB_invert.png"
          alt="logo"
          width="70px"
          height="30px"
        ></img>
      </div>
      <div className={style.menu}>
        <MenuContainer />
      </div>
    </nav>
  );
};

export default Header;
