import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/authReducer";
import { AppStateType } from "../../redux/reduxStore";
import style from "./Login.module.css";
import { LoginReduxForm } from "./LoginForm";

type LoginType = {
  isAuth: boolean
  captchaUrl: string | null
  login: (
    email: string | null,
    password: string | null,
    rememberMe: boolean,
    captcha: string | null,
  ) => void
};

class Login extends React.Component<LoginType> {
  render() {
    if (this.props.isAuth) {
      return <Redirect to="/profile" />;
    }

    const onSubmitData = (formData: any) => {
      this.props.login(
        formData.email,
        formData.password,
        formData.remberMe,
        formData.captcha
      );
    };

    return (
      <div className={style.login}>
        <div className={style.login__block}>
          <div className={style.block__title + " " + style.title}>LOG IN</div>
          <LoginReduxForm
            onSubmit={onSubmitData}
            // @ts-ignore
            captchaUrl={this.props.captchaUrl}
          />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
  };
};

export default connect(mapStateToProps, { login })(Login);
