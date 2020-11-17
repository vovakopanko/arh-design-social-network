import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "../../redux/authReducer";
import { compose } from "redux";
import { AppStateType } from "../../redux/reduxStore";

type HeaderContainerType = {
  isAuth:boolean
  login:string | null
  logout: ()=>void
  photos:string | null
}

class HeaderContainer extends React.Component<HeaderContainerType> {
  render() {
    return (
      <Header
        isAuth={this.props.isAuth}
        login={this.props.login}
        logout={this.props.logout}
        photos={this.props.photos}
      />
    );
  }
}

let mapStateToProps = (state:AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photos: state.auth.photos,
  };
};

export default compose(connect(mapStateToProps, { logout }))(HeaderContainer);
