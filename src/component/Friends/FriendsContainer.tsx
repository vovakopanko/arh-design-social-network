import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends, removeFriend } from "../../redux/friendsReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Friends } from "./Friends";
import { startDialog } from "../../redux/messageReducer";
import { AppStateType } from "../../redux/reduxStore";

type FriendsContainerType = {
  unFollowFriend:(friendId:number)=>void
  openDialogs:(friendsId:number, userName:string)=>void
}

const FriendsContainer:React.FC<FriendsContainerType> = () => {
  const friends = useSelector((state:AppStateType) => state.friendsPage.friends);
  const loadingFriends = useSelector(
    (state:AppStateType) => state.friendsPage.loadingFriends
  );

  const dispatch = useDispatch();

  const openDialogs = React.useCallback(
    (friendsId:number, userName:string) => {
      dispatch(startDialog(friendsId, true, userName));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  const unFollowFriend = React.useCallback(
    (friendId:number) => {
      dispatch(removeFriend(friendId));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  return (
    <Friends
      unFollowFriend={unFollowFriend}
      openDialogs={openDialogs}
      friends={friends}
      loadingFriends={loadingFriends}
    />
  );
};

export default withAuthRedirect(FriendsContainer);
