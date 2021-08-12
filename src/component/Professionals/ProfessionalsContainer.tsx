import React from "react";
import { connect } from "react-redux";
import {
  getUsers,
  follow,
  unfollow,
  searchName,
} from "../../redux/professionalsReducer";
import { startDialog } from "../../redux/messageReducer";
import Professionals from "./Professionals";
import Preloader from "../common/Preloader/Preloader";
import { AppStateType } from "../../redux/reduxStore";

type PropsType = {
  currentPage: number
  pageSize: number
  pageNumber: number
  isFeching: boolean
  totalUsersCount: number
  professionals: any
  followingInProgress: any
  toggleIsFollowingProgress: any
  follow: any
  unfollow: any
  startDialog: any
  setPortionNumber: any
  currentPortion: number
  searchName: string
  getUsers: (currentPage: number, pageSize: number) => void;
  onPageChanged: (pageNumber: number) => void;
};

class ProfessionalsContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  componentWillUnmount() {
  }

  render() {
    return (
      <>
        {this.props.isFeching ? (
          <Preloader />
        ) : (
          <Professionals
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            professionals={this.props.professionals}
            followingInProgress={this.props.followingInProgress}

            // @ts-ignore
            toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}

            follow={this.props.follow}
            unfollow={this.props.unfollow}
            startDialog={this.props.startDialog}
            setPortionNumber={this.props.setPortionNumber}
            currentPortion={this.props.currentPortion}
            searchName={this.props.searchName}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state:AppStateType) => {
  return {
    professionals: state.professionalsPage.professionals,
    pageSize: state.professionalsPage.pageSize,
    portionSize: state.professionalsPage.portionSize,
    totalUsersCount: state.professionalsPage.totalUsersCount,
    currentPage: state.professionalsPage.currentPage,
    isFeching: state.professionalsPage.isFeching,
    followingInProgress: state.professionalsPage.followingInProgress,
    isAuth: state.auth.isAuth,
    currentPortion: state.professionalsPage.currentPortion,
  
  };
};

export default connect(mapStateToProps, {
  getUsers,
  follow,
  unfollow,
  startDialog,
  searchName,
  // @ts-ignore
})(ProfessionalsContainer);
