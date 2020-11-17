import React from "react";
import { reduxForm } from "redux-form";
import { CreateField, required } from "../../utils/validator/validators";
import { InputField, Textarea } from "../common/FormsControls/FormsControls";
import style from "./Contact.module.css";

type ContactRequestType={
  handleSubmit:any
}

const ContactRequest: React.FC<ContactRequestType> = ({ handleSubmit }) => {
  return (
    <div className={style.block__form}>
      <form onSubmit={handleSubmit}>
        <div>{CreateField("text", InputField, required, "Name", "Name:")}</div>
        <div>
          {CreateField("text", InputField, required, "Email", "Email:")}
        </div>
        <div>
          {CreateField("text", InputField, required, "Telephone", "Tel.:")}
        </div>
        <div className={style.form__textArea}>
          {CreateField(
            "textarea",
            Textarea,
            required,
            "Request",
            "Your Request:"
          )}
        </div>
        <div>
          <button className={style.block__buttonRequest}>Отправить</button>
        </div>
      </form>
    </div>
  );
};

export const FormContactRequest = reduxForm({ form: "sendRequest" })(
  ContactRequest
);
