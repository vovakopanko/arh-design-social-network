import React from "react";
import { reduxForm } from "redux-form";
import { CreateField, required } from "../../utils/validator/validators";
import { InputField, Textarea } from "../common/FormsControls/FormsControls";
import style from "./Contact.module.css";

const ContactRequest = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>{CreateField("text", InputField, required, "Name", "Name:")}</div>
      <div>{CreateField("text", InputField, required, "Email", "Email:")}</div>
      <div>
        {CreateField("text", InputField, required, "Telephone", "Tel.:")}
      </div>
      <div className={style.reques}>
        {CreateField(
          "textarea",
          Textarea,
          required,
          "Request",
          "Your Request:"
        )}
      </div>
      <div className={style.sendForm}>
        <button>Отправить</button>
      </div>
    </form>
  );
};

export const FormContactRequest = reduxForm({ form: "sendRequest" })(
  ContactRequest
);
