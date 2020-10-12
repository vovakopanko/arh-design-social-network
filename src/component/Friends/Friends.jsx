import React from 'react';
import style from './Friends.module.css';
import Preloader from './../common/Preloader/Preloader';
import FriendsItem from './FriendsItem/FriendsItem';

export const Friends = ({friends,openDialogs,unFollowFriend,loadingFriends}) => {

    let friendsElement = friends.map(f => {
        return <FriendsItem
            key={f.id}
            friend={f}
            openDialogs={openDialogs}
            unFollowFriend={unFollowFriend}/>
    });

    return (
        <div className={style.main}>
            <h3>Friends:</h3>
            {loadingFriends ? <Preloader className={style.Preloader}/> : <div className={style.friend}>
                {friendsElement}
            </div>}
        </div>
    );
}

