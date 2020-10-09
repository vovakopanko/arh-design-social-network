import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { reduxForm } from "redux-form";
import { login } from "../../redux/authReducer";
import { CreateField, required } from "../../utils/validator/validators";
import { InputField } from "../common/FormsControls/FormsControls";
import style from "./Login.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
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

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

class Login extends React.Component {
  render() {
    if (this.props.isAuth) {
      return <Redirect to="/profile" />;
    }

    const onSubmitData = (formData) => {
      this.props.login(
        formData.email,
        formData.password,
        formData.remberMe,
        formData.captcha
      );
    };

    return (
      <div className={style.titlelogin}>
        <h1>LOG IN</h1>
        <LoginReduxForm
          onSubmit={onSubmitData}
          captchaUrl={this.props.captchaUrl}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
  };
};

export default connect(mapStateToProps, { login })(Login);
