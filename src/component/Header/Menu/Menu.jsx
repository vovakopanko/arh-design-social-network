import React from "react";
import style from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import photoUser from "./../../../assets/images/user.png";

let Menu = ({ infoLogOut, logout, photos, isAuth, login }) => {
  return (
    <div className={style.menu}>
      <NavLink
        to="/content"
        activeClassName={style.activeLink}
        className={style.content}
      >
        Главная
      </NavLink>
      <NavLink
        to="/project"
        activeClassName={style.activeLink}
        className={style.project}
      >
        Проекты
      </NavLink>
      <NavLink
        to="/services"
        activeClassName={style.activeLink}
        className={style.services}
      >
        Услуги
      </NavLink>
      <NavLink
        to="/professionals"
        activeClassName={style.activeLink}
        className={style.professionals}
      >
        Специалисты
      </NavLink>
      <NavLink
        to="/contact"
        activeClassName={style.activeLink}
        className={style.contact}
      >
        Контакты
      </NavLink>
      <NavLink
        to="/partners"
        activeClassName={style.activeLink}
        className={style.partners}
      >
        С нами работают
      </NavLink>

      <NavLink
        to="/friends"
        activeClassName={style.activeLink}
        className={style.friends}
      >
        <img
          src="https://lindengrove.org/wp-content/uploads/2018/03/4-color-circle-Insider.png"
          alt="friends"
          height="30px"
          width="30px"
        ></img>
      </NavLink>

      <NavLink
        to="/message"
        activeClassName={style.activeLink}
        className={style.message}
      >
        <img
          src="https://img.icons8.com/cotton/2x/secured-letter--v1.png"
          alt="envelope"
          height="30px"
          width="30px"
        ></img>
      </NavLink>

      <NavLink
        to="/profile"
        activeClassName={style.activeLink}
        className={style.profile}
      >
        <img
          src={photos || photoUser}
          alt="photoUser"
          width="30px"
          height="30px"
        ></img>
      </NavLink>

      <NavLink
        to="/login"
        activeClassName={style.activeLink}
        className={style.login}
      >
        <div className={style.login}>
          {isAuth ? (
            <div>
              <span className={style.infoLog}>{login} </span>
              <button onClick={logout}>LogOut</button>
            </div>
          ) : (
            <div>
              <span className={style.infoLog}>{infoLogOut}</span>{" "}
              <button>Login</button>
            </div>
          )}
        </div>
      </NavLink>
    </div>
  );
};

export default Menu;
