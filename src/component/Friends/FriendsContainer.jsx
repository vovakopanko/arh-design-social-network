import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends, removeFriend } from "../../redux/friendsReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Friends } from "./Friends";
import { startDialog } from "../../redux/messageReducer";

const FriendsContainer = () => {
  const friends = useSelector((state) => state.friendsPage.friends);
  const loadingFriends = useSelector(
    (state) => state.friendsPage.loadingFriends
  );

  const dispatch = useDispatch();

  const openDialogs = React.useCallback(
    (friendsId, userName) => {
      dispatch(startDialog(friendsId, true, userName));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  const unFollowFriend = React.useCallback(
    (friendId) => {
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
