import React from "react";
import { connect } from "react-redux";
import Menu from "./Menu";
import { logout } from "../../../redux/authReducer";
import { compose } from "redux";
import { AppStateType } from "../../../redux/reduxStore";

type MenuContainerType = {
  logout:()=>void
  photos:string | null
  isAuth:boolean
  login:string | null
}

class MenuContainer extends React.Component<MenuContainerType> {
  render() {
    return (
      <Menu
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

export default compose(connect(mapStateToProps, { logout }))(MenuContainer);
