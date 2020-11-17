import React from "react";
import { CreateField, required } from "../../utils/validator/validators";
import { InputField } from "../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";
import style from "./Login.module.css";

type LoginFormType = {
  handleSubmit: any;
  error: any;
  captchaUrl: string | null;
};

const LoginForm: React.FC<LoginFormType> = ({
  handleSubmit,
  error,
  captchaUrl,
}) => {
  return (
    <form onSubmit={handleSubmit} className={style.titleForm}>
      <div>{CreateField("text", InputField, [required], "email", "email")}</div>
      <div>
        {CreateField(
          "password",
          InputField,
          [required],
          "password",
          "password"
        )}

        {captchaUrl && <img src={captchaUrl} alt="captcha" />}
        {captchaUrl &&
          CreateField(
            {},
            InputField,
            [required],
            "captcha",
            "Symbols from image"
          )}
      </div>
      <div>
        {CreateField("checkbox", "input", null, "rememberMe", null)}
        Remember Me
      </div>
      {error && <div className={style.formAllError}>{error}</div>}
      <div>
        <button className={style.enterLog}>Вход</button>
      </div>
      <div className={style.freeLogin}>
        <div>If you dont registreted, you can use test account:</div>
        <div>
          <b>Login</b>: free@samuraijs.com{" "}
        </div>
        <div>
          <b>Password</b>: free
        </div>
      </div>
    </form>
  );
};

export const LoginReduxForm = reduxForm({
  form: "login",
  //@ts-ignore
})(LoginForm);
