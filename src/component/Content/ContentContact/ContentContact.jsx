import React from "react";
import { NavLink } from "react-router-dom";
import style from "./ContentContact.module.css";

let ContentContact = () => {
  return (
    <div>
      <div>
        <h2>Пришло время для первого шага</h2>
        <h3>
          Планируете интерьер загородного дома, предстоит покупка квартиры,
          решили обновить интерьер - получите бесплатную консультацию от наших
          специалистов
        </h3>
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
