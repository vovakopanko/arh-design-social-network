import React from "react";
import { NavLink } from "react-router-dom";
import style from "./ContentInfo.module.css";
import office from "../../../assets/images/office2.jpg"

let ContentInfo = (props) => {
  return (
    <div>
      <div className={style.infohead}>
        <h1>NORDISK INOVATION</h1>
        <h2>ARCHITECTURE & DESIGN</h2>
        <NavLink to="/project">
          <button className={style.button1}>ПРОЕКТЫ</button>
        </NavLink>
        <NavLink to="/services">
          <button className={style.button2}>УСЛУГИ</button>
        </NavLink>
      </div>
      <div className={style.info}>
        <div className={style.photoinfo}>
          <img
            src={office}
            alt="office"
          ></img>
        </div>
        <div className={style.textinfo}>
          <span className={style.namestudio}>Студия дизайна и интерьера</span>
          <h2>NORDISK INOVATION</h2>
          <span>
            <div className={style.infocompany}>
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
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentInfo;
