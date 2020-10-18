import React from "react";
import style from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import photoUser from "./../../../assets/images/user.png";
import team from "./../../../assets/images/team.png";

let Menu = ({ logout, photos, isAuth, login }) => {
  return (
    <div className={style.header__menu}>
      <NavLink
        to="/content"
        activeClassName={style.header__items_activeLink}
        className={style.header__items}
      >
        Главная
      </NavLink>
      <NavLink
        to="/project"
        activeClassName={style.header__items_activeLink}
        className={style.header__items}
      >
        Проекты
      </NavLink>
      <NavLink
        to="/services"
        activeClassName={style.header__items_activeLink}
        className={style.header__items}
      >
        Услуги
      </NavLink>
      <NavLink
        to="/professionals"
        activeClassName={style.header__items_activeLink}
        className={style.header__items}
      >
        Специалисты
      </NavLink>
      <NavLink
        to="/contact"
        activeClassName={style.header__items_activeLink}
        className={style.header__items}
      >
        Контакты
      </NavLink>
      <NavLink
        to="/partners"
        activeClassName={style.header__items_activeLink}
        className={style.header__items}
      >
        С нами работают
      </NavLink>

      <NavLink
        to="/friends"
        activeClassName={style.header__items_activeLink}
        className={style.header__items_color}
      >
        <img className={style.header__friends} src={team} alt="friends"></img>
      </NavLink>

      <NavLink
        to="/message"
        activeClassName={style.header__items_activeLink}
        className={style.header__items_color}
      >
        <img className={style.header__message}
          src="https://img.icons8.com/ios/452/secured-letter.png"
          alt="envelope"
        ></img>
      </NavLink>

      <NavLink
        to="/profile"
        activeClassName={style.header__items_activeLink}
        className={style.header__items_color + " " + style.header__items_photoRadius}
      >
        <img className={style.header__profile}
          src={photos || photoUser}
          alt="photoUser"
        ></img>
      </NavLink>

      <NavLink
        to="/login"
        activeClassName={style.header__items_activeLink}
      >
        <div>
          {isAuth ? (
            <div>
              <span className={style.header__login + " " + style.header__items}>{login} </span>
              <button className={style.header__button_color + " " + style.header__button_hover + " " + style.header__items} onClick={logout}>LogOut</button>
            </div>
          ) : (
            <div>
              <button className={style.header__button_color + " " + style.header__button_hover + " " + style.header__items}>Login</button>
            </div>
          )}
        </div>
      </NavLink>
    </div>
  );
};

export default Menu;
