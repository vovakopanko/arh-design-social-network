import React from "react";
import { connect } from "react-redux";
import Menu from "./Menu";
import { logout } from "../../../redux/authReducer";
import { compose } from "redux";

class MenuContainer extends React.Component {
  render() {
    return (
      <Menu
        isAuth={this.props.isAuth}
        login={this.props.login}
        logout={this.props.logout}
        infoLogOut={this.props.infoLogOut}
        photos={this.props.photos}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    infoLogOut: state.auth.infoLogOut,
    photos: state.auth.photos,
  };
};

export default compose(connect(mapStateToProps, { logout }))(MenuContainer);
