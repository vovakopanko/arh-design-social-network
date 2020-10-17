import React from "react";
import { NavLink } from "react-router-dom";
import style from "./ContentInfo.module.css";
import office from "../../../assets/images/office2.jpg";

let ContentInfo = () => {
  return (
    <div className={style.block}>
      <div>
        <div className={style.block__title + " " + style.block__title_big}>
          ARCHITECTURE & DESIGN
        </div>
        <div>
          <span className={style.block__title + " " + style.block__title_border}>
            СТУДИЯ ДИЗАЙНА И ИНТЕРЬЕРА
          </span>
        </div>
      </div>
      <div className={style.block__items}>
        <img src={office} alt="office"></img>
        <div className={style.block__item}>
          <span>
            <div className={style.block__description}>
              <p>
                Дом - это внутреннее отражение нашего "Я". Мы просыпаемся,
                проводим много времени в нем, и от того, насколько комфортно и
                красиво в доме, зависит - наше настроение, спокойствие,
                внутренняя гармония и успех. Важно не забывать о своей мечте!
              </p>
              <p>
                Дом, идея которого только возникает в форме фантазий, через
                несколько недель может стать проектом на бумаге. Пройдет еще
                немного времени, и Вы станете обладателем предмета своих грез.
              </p>
              <p>
                А мы в свою очередь приложем все силы для того, чтобы это
                произошло как можно быстрее. Уверены, что вместе мы создадим
                уникальный дом, наполненный теплом и уютом.
              </p>
              <NavLink to="/project">
                <span
                  className={
                    style.block__button + " " + style.block__button_left
                  }
                >
                  ПРОЕКТЫ
                </span>
              </NavLink>
              <NavLink to="/services">
                <span
                  className={
                    style.block__button + " " + style.block__button_right
                  }
                >
                  УСЛУГИ
                </span>
              </NavLink>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentInfo;
