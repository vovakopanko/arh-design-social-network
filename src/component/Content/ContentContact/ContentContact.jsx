import React from "react";
import { NavLink } from "react-router-dom";
import style from "./ContentContact.module.css";

let ContentContact = () => {
  return (
    <div>
      <div>
        <h3>Пришло время для первого шага</h3>
        <div className={style.infoContact}>
          Планируете интерьер загородного дома, предстоит покупка квартиры,
          решили обновить интерьер - получите бесплатную консультацию от наших
          специалистов
        </div>
      </div>
      <div className={style.button}>
        <NavLink to="/contact">
          <button className={style.button3}>Написать</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ContentContact;
