import React from "react";
import { connect } from "react-redux";
import {
  getMessageWithAllUser,
  getMessageWhithUser,
  postMessageForUser,
  deleteMessageWhithUser,
  getCurrentIdUser,
  GetListWhithNewMessage,
  setUnreadMessage,
} from "../../redux/messageReducer";
import Message from "./Message";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";

class MessageContainer extends React.Component {
  componentDidMount() {
    this.props.getMessageWithAllUser();
  }

  render() {

    return (
      <>
       {this.props.isFeching ? 
         <Preloader /> :
      <Message
        {...this.props}
        getMessageWithAllUser={this.props.getMessageWithAllUser}
        getMessageWhithUser={this.props.getMessageWhithUser}
        postMessageForUser={this.props.postMessageForUser}
        deleteMessageWhithUser={this.props.deleteMessageWhithUser}
        getCurrentIdUser={this.props.getCurrentIdUser}
        GetListWhithNewMessage={this.props.GetListWhithNewMessage}
        tap={this.props.tap}
        currentUserId={this.props.currentUserId}
        setUnreadMessage={this.props.setUnreadMessage}
        portionSize={this.props.portionSize}
        userName={this.props.userName}
        isFechingForDialogs={this.props.isFechingForDialogs}
      />
       }
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    messages: state.messagePage.message,
    message: state.messagePage.messageData,
    tap: state.messagePage.tap,
    currentUserId: state.messagePage.currentUserId,
    portionSize: state.messagePage.portionSize,
    userName: state.messagePage.userName,
    isFeching: state.messagePage.isFeching,
    isFechingForDialogs: state.messagePage.isFechingForDialogs,
  };
};

export default compose(
  connect(mapStateToProps, {
    getMessageWithAllUser,
    getMessageWhithUser,
    postMessageForUser,
    deleteMessageWhithUser,
    getCurrentIdUser,
    GetListWhithNewMessage,
    setUnreadMessage,
  }),
  withRouter,
  withAuthRedirect
)(MessageContainer);
