import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  AddPost,
  setUserProfile,
  getProfileData,
  getUserStatus,
  updateStatus,
  savePhoto,
  saveProfile,
  getUserFollowStatus,
  follow,
  unfollow,
} from "../../redux/profileReducer";
import { startDialog } from "../../redux/messageReducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  getPostData,
  getProfile,
  getProfileSelector,
  getStatus,
  getUserIdAuth,
  getFollowingProgress,
  getFollowingInProgress,
  getisAuth,
  getIsFetching,
} from "../../redux/selectors/profileSelector";
import Preloader from "../common/Preloader/Preloader";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userIdAuth;
    }
    this.props.getProfileData(userId);
    this.props.getUserStatus(userId);
    this.props.getUserFollowStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <div>
        <>
          {this.props.isFeching ? (
            <Preloader />
          ) : (
            <Profile
              {...this.props}
              profile={this.props.profile}
              status={this.props.status}
              updateStatus={this.props.updateStatus}
              isOwner={!!this.props.match.params.userId}
              savePhoto={this.props.savePhoto}
              saveProfile={this.props.saveProfile}
              getUserFollowStatus={this.props.getUserFollowStatus}
              userIdAuth={this.props.userIdAuth}
              followingProgress={this.props.followingProgress}
              followingInProgress={this.props.followingInProgress}
              userId={this.props.match.params.userId}
              startDialog={this.props.startDialog}
            />
          )}
        </>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profilePage: getProfileSelector(state),
    profile: getProfile(state),
    status: getStatus(state),
    postData: getPostData(state),
    userIdAuth: getUserIdAuth(state),
    followingProgress: getFollowingProgress(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: getisAuth(state),
    isFeching: getIsFetching(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    AddPost,
    setUserProfile,
    getProfileData,
    getUserStatus,
    updateStatus,
    savePhoto,
    saveProfile,
    getUserFollowStatus,
    follow,
    unfollow,
    startDialog,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
