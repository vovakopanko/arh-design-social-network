import React from "react";
import { NavLink } from "react-router-dom";
import style from "./../ContentService/ContentService.module.css";

let ContentService = () => {
  return (
    <div>
      <div className={style.listService}>
        <div className={style.design}>
          <div>
            <b> Дизайн</b>
          </div>
          <div className={style.textinfo}>
            После встреч дизайнера и заказчика, проведения обмера объекта и на
            основе всех пожеланий утверждается концепт дизайна. Возможен заказ
            проекта интерьера отдельных комнат городской квартиры или частного
            дома, включающего перепланировку помещений.
          </div>
          <div className={style.more}>
            
              <NavLink to="/services">
                <button>Подробнее</button>
              </NavLink>
          </div>
        </div>
        <div className={style.project}>
          <div>
            <b>Проектирование жилых домов</b>
          </div>
          <div className={style.textinfo}>
            Объем архитектурного проектирования обсуждается и утверждается после
            выезда специалистов на место строительства. Начальной формой
            проектирования может быть эскизный проект архитектуры или отдельная
            разработка дизайна фасада.
          </div>
          <div className={style.more}>
            <NavLink to="/services">
              <button>Подробнее</button>
            </NavLink>
          </div>
        </div>
        <div className={style.accompaniments}>
          <div>
            <b>Авторское сопровождение</b>
          </div>
          <div className={style.textinfo}>
            Авторский надзор - контроль за выполнением всех строительных и
            ремонтных работ на объекте. Вы будете уверены, что
            строительно-отделочные работы будут выполнены в соответствие с
            утвержденным дизайн-проектом.
          </div>
          <div className={style.more}>
            <NavLink to="/services">
              <button>Подробнее</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentService;
