import React from "react";
import style from "./Header.module.css";
// import MenuContainer from "./Menu/MenuContainer";
import { useState } from "react";
import logo from "./../../assets/images/logo.png";
import photoUser from "./../../assets/images/user.png";
import team from "./../../assets/images/team.png";
import { NavLink } from "react-router-dom";

export type HeaderType = {
  logout:()=>void
  photos:string | null
  isAuth:boolean
  login:string | null
}

let Header: React.FC<HeaderType> = ({ logout, photos, isAuth, login }) => {
  const [isActive, setActive] = useState(false);
  const [blockScroll, setScroll] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
    setScroll(!blockScroll);
  };
  return (
    <div className={style.header}>
      <nav className={style.header__body}>
        <div className={style.header__logo}>
          <img src={logo} alt="logo"></img>
        </div>
        <div
          className={isActive ? style.header__menu_active : style.header__menu}
        >
          <div>
            <NavLink
              onClick={toggleClass}
              to="/content"
              activeClassName={style.header__items_activeLink}
              className={style.header__items}
            >
              Главная
            </NavLink>
          </div>
          <div>
            <NavLink
              onClick={toggleClass}
              to="/project"
              activeClassName={style.header__items_activeLink}
              className={style.header__items}
            >
              Проекты
            </NavLink>
          </div>
          <div>
            <NavLink
              onClick={toggleClass}
              to="/services"
              activeClassName={style.header__items_activeLink}
              className={style.header__items}
            >
              Услуги
            </NavLink>
          </div>
          <div>
            <NavLink
              onClick={toggleClass}
              to="/professionals"
              activeClassName={style.header__items_activeLink}
              className={style.header__items}
            >
              Специалисты
            </NavLink>
          </div>
          <div>
            <NavLink
              onClick={toggleClass}
              to="/contact"
              activeClassName={style.header__items_activeLink}
              className={style.header__items}
            >
              Контакты
            </NavLink>
          </div>
          <div>
            <NavLink
              onClick={toggleClass}
              to="/partners"
              activeClassName={style.header__items_activeLink}
              className={style.header__items}
            >
              Партнёры
            </NavLink>
          </div>
          <NavLink
            onClick={toggleClass}
            to="/friends"
            activeClassName={style.header__items_activeLink}
            className={style.header__items_color}
          >
            <img
              className={style.header__friends}
              src={team}
              alt="friends"
            ></img>
          </NavLink>
          <NavLink
            onClick={toggleClass}
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
            onClick={toggleClass}
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
            <NavLink
              onClick={toggleClass}
              to="/login"
              activeClassName={style.header__items_activeLink}
            >
              {isAuth ? (
                <span
                  className={style.header__login + " " + style.header__items}
                >
                  {login}
                </span>
              ) : null}
            </NavLink>
          </div>
          <div>
            <NavLink
              onClick={toggleClass}
              to="/login"
              activeClassName={style.header__items_activeLink}
            >
              {isAuth ? (
                <span>
                  <span
                    className={style.header__login + " " + style.header__items}
                  ></span>
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
        <div
          className={
            isActive ? style.header__burger_active : style.header__burger
          }
          onClick={toggleClass}
        >
          <span></span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
