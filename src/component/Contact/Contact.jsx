import React from "react";
import style from "./Contact.module.css";
import { FormContactRequest } from "./FormContactRequest";

let Contact = ({ officeLocation, sendRequest }) => {
  return (
    <div>
      <div>
        <h2>Вы можете нас найти:</h2>
      </div>
      <img className={style.locationImg} src={officeLocation} alt="checpoint" />
      <div className={style.contactInfo}>
        <b>Телефон:</b> +375 (29) 111-11-11
      </div>
      <div>
        <b>E-mail:</b> INFO@NORDISKINOVATION.BY{" "}
        <div>(для коммерческих предложений)</div>
        <div className={style.contactInfo}>
          <b>Телефон:</b> 8(0214) 55-55-55
        </div>
        <b>E-mail:</b> TATISHARM@GMAIL.COM
        <div>(для заказчиков)</div>
        <div></div>
        <div>
          <h2>Оставьте свою заявку:</h2>
        </div>
        <FormContactRequest
          onSubmit={() => {
            sendRequest();
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
