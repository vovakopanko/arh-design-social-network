import React from "react";
import style from "./Contact.module.css";
import { FormContactRequest } from "./FormContactRequest";

let Contact = ({ officeLocation, sendRequest }) => {
  return (
    <div className={style.contact}>
      <div className={style.contact__block}>
        <div
          className={style.contact__title + " " + style.contact__title_border}
        >
          Вы можете нас найти:
        </div>
        <div className={style.contact__location}>
          <img src={officeLocation} alt="checpoint" />
        </div>
        <div>
          <b>Телефон:</b> +375 (29) 111-11-11
        </div>
        <div>
          <b>E-mail:</b> INFO@NORDISKINOVATION.BY
          <div className={style.contactInfo}>
          </div>
          <div>
            <div className={style.contact__subtitle}>Оставьте свою заявку:</div>
          </div>
          <FormContactRequest
            onSubmit={() => {
              sendRequest()
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
