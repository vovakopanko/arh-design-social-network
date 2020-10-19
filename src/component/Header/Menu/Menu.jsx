import React from "react";
import style from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import photoUser from "./../../../assets/images/user.png";
import team from "./../../../assets/images/team.png";

let Menu = ({ logout, photos, isAuth, login }) => {
  return (
    <div className={style.header__menu}>
      <div>
        <NavLink
          to="/content"
          activeClassName={style.header__items_activeLink}
          className={style.header__items}
        >
          Главная
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/project"
          activeClassName={style.header__items_activeLink}
          className={style.header__items}
        >
          Проекты
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/services"
          activeClassName={style.header__items_activeLink}
          className={style.header__items}
        >
          Услуги
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/professionals"
          activeClassName={style.header__items_activeLink}
          className={style.header__items}
        >
          Специалисты
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/contact"
          activeClassName={style.header__items_activeLink}
          className={style.header__items}
        >
          Контакты
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/partners"
          activeClassName={style.header__items_activeLink}
          className={style.header__items}
        >
          Партнёры
        </NavLink>
      </div>
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
        <img
          className={style.header__message}
          src="https://img.icons8.com/ios/452/secured-letter.png"
          alt="envelope"
        ></img>
      </NavLink>
      <NavLink
        to="/profile"
        activeClassName={style.header__items_activeLink}
        className={
          style.header__items_color + " " + style.header__items_photoRadius
        }
      >
        <img
          className={style.header__profile}
          src={photos || photoUser}
          alt="photoUser"
        ></img>
      </NavLink>
      <div>
        <NavLink to="/login" activeClassName={style.header__items_activeLink}>
          {isAuth ? (
            <span className={style.header__login + " " + style.header__items}>
              {login}
            </span>
          ) : null}
        </NavLink>
      </div>
      <div>
        <NavLink to="/login" activeClassName={style.header__items_activeLink}>
          {isAuth ? (
            <span>
              <span className={style.header__login + " " + style.header__items}>
              </span>
              <span
                className={
                  style.header__button_color +
                  " " +
                  style.header__button_hover +
                  " " +
                  style.header__items
                }
                onClick={logout}
              >
                LogOut
              </span>
            </span>
          ) : (
              <span
                className={
                  style.header__button_size +
                  " " +
                  style.header__button_hover +
                  " " +
                  style.header__items
                }
              >
                Login
            </span>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
