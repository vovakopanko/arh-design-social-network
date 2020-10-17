import React, { useState } from "react";
import Preloader from "../common/Preloader/Preloader";
import style from "./Profile.module.css";
import StatusProfileHOOC from "./StatusProfile/StatusProfileHOOC";
import Wall from "./Wall/Wall";
import userPhoto from "../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";
import { NavLink } from "react-router-dom";

let Profile = ({
  profile,
  isOwner,
  savePhoto,
  saveProfile,
  getUserFollowStatus,
  userId,
  followingProgress,
  follow,
  unfollow,
  isAuth,
  followingInProgress,
  startDialog,
  ...props
}) => {
  const [EditMode, setFormDataProfile] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
      <div className={style.infoProfile}>
        <div className={style.information}>Information:</div>
        {profile.userId ? (
          <div>
            <span>ID:</span> {profile.userId}
          </div>
        ) : null}
        {profile.myMile ? (
          <div>
            <span>My mile: </span>
            {profile.myMile}
          </div>
        ) : null}
        {profile.age ? (
          <div>
            {" "}
            <span>Age: </span>
            {profile.age}
          </div>
        ) : null}
        {profile.aboutMe ? (
          <div>
            {" "}
            <span>About Me: </span>
            {profile.aboutMe}
          </div>
        ) : null}
        {profile.fullName ? (
          <div>
            {" "}
            <span>Full Name: </span>
            {profile.fullName}
          </div>
        ) : null}
        {profile.lookingForAJobDescription ? (
          <div>
            <span>My professionals skills: </span>
            {profile.lookingForAJobDescription}
          </div>
        ) : null}
        <b className={style.contactInformation}>Contacts:</b>:{" "}
        <div className={style.contactblock}>
          {Object.keys(profile.contacts).map((social) => {
            return (
              <Contact
                key={social.id}
                contactTitle={social}
                contactValue={profile.contacts[social]}
              />
            );
          })}
        </div>
        <div className={style.buttonEditActiveted}>
          {isOwner || <button onClick={goToEditMode}>edit profile</button>}
        </div>
      </div>
    );
  };

  const Contact = ({ contactTitle, contactValue }) => {
    return (
      <div className={style.unitInfo}>
        {contactValue ? (
          <div>
            {" "}
            <span className={style.contact}>{contactTitle}:</span>
            <a href={contactValue} rel="noopener noreferrer" to target="_blank">
              {contactValue}
            </a>
          </div>
        ) : null}
      </div>
    );
  };

  const onSubmit = (formData) => {
    saveProfile(formData);
    setFormDataProfile(false);
  };

  const PhotoUser = ({ profile }) => {
    return (
      <div className={style.photoMainProfile}>
        <img
          src={profile.photos.large || userPhoto}
          alt="userPhoto"
          height="300px"
          width="300px"
        />
      </div>
    );
  };

  const activeForm = () => {
    setFormDataProfile(true);
  };
  const FollowUnfollowSuccess = ({
    followingProgress,
    followingInProgress,
    userId,
    follow,
    unfollow,
    startDialog,
  }) => {
    return (
      <div>
        <NavLink
          to="/message"
          onClick={() => {
            startDialog(userId);
          }}
        >
          <button>Send Message</button>
        </NavLink>
        {followingProgress ? (
          <button
            disabled={followingInProgress.some((id) => id === userId)}
            onClick={() => {
              follow(userId);
            }}
          >
            UnFollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === userId)}
            onClick={() => {
              unfollow(userId);
            }}
          >
            Follow
          </button>
        )}
      </div>
    );
  };
  return (
    <div className={style.profile}>
      <div className={style.profile__block}>
        <div className={style.profileInfo}>
          <div className={style.userblocone}>
            <div className={style.fullNameUser}>{profile.fullName}</div>
            <div>
              <div className={style.profileStatus}>
                <StatusProfileHOOC
                  status={props.status}
                  updateStatus={props.updateStatus}
                />
              </div>
              <PhotoUser
                profile={profile}
                onMainPhotoSelected={onMainPhotoSelected}
              />
              <div>
                {isOwner ? (
                  <FollowUnfollowSuccess
                    followingProgress={followingProgress}
                    followingInProgress={followingInProgress}
                    userId={userId}
                    follow={follow}
                    unfollow={unfollow}
                    startDialog={startDialog}
                  />
                ) : null}
              </div>
            </div>
          </div>
          <div className={style.userbloctwo}>
            <div className={style.info}>
              {EditMode ? (
                <ProfileDataForm
                  initialValues={profile}
                  profile={profile}
                  onSubmit={onSubmit}
                  onMainPhotoSelected={onMainPhotoSelected}
                />
              ) : (
                <ProfileData
                  goToEditMode={activeForm}
                  profile={profile}
                  isOwner={isOwner}
                />
              )}
            </div>
          </div>

          <div className={style.userblocfour}>
            <Wall
              AddPost={props.AddPost}
              postData={props.postData}
              isOwner={isOwner}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
