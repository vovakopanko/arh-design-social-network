import React from "react";
import style from "./Contact.module.css";
import { FormContactRequest } from "./FormContactRequest";

type ContactType = {
  officeLocation:string
  sendRequest:()=>void
}

let Contact: React.FC<ContactType> = ({ officeLocation, sendRequest }) => {
  return (
    <div className={style.contact}>
      <div className={style.contact__block}>
        <div className={style.block__title + " " + style.block__title_border}>
          Вы можете нас найти:
        </div>
        <div className={style.block__location}>
          <img src={officeLocation} alt="checpoint" />
        </div>
        <div className={style.block__interaction}>
          <div>
            {" "}
            <b>Телефон:</b> +375 (29) 111-11-11{" "}
          </div>
          <div>
            <b>E-mail:</b> info@nordiskinovation.by
          </div>
        </div>
        <div>
          <div className={style.block__subtitle}>Оставьте свою заявку:</div>
          <FormContactRequest
            onSubmit={() => {
              sendRequest();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
