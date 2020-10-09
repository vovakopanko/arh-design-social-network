import React from "react";
import { reduxForm } from "redux-form";
import { CreateField } from "../../utils/validator/validators";
import { InputField } from "../common/FormsControls/FormsControls";
import style from "./Profile.module.css";

const ProfileDataForm = ({
  profile,
  handleSubmit,
  error,
  onMainPhotoSelected,
}) => {
  debugger;
  return (
    <form onSubmit={handleSubmit}>
      <div className={style.information}>Information:</div>
      <p>
        <span>ID: </span> {!profile.userId ? "---" : profile.userId}
      </p>
      <p>
        <span>My mile: </span> {!profile.myMile ? "---" : profile.myMile}
      </p>
      <p>
        <span>Age: </span>
        {!profile.age ? "---" : profile.age}
      </p>
      <p>
        <span>About Me: </span>{" "}
        {CreateField("text", InputField, [], "aboutMe", "about Me")}
      </p>
      <p>
        <span>Full Name: </span>{" "}
        {CreateField("text", InputField, [], "fullName", "Full name")}
      </p>
      <p>
        <span>My professional skills: </span>{" "}
        {CreateField(
          "text",
          InputField,
          [],
          "lookingForAJobDescription",
          "Your Skills"
        )}
      </p>
      <b>Contacts</b>:{" "}
      <div className={style.contactblock}>
        {Object.keys(profile.contacts).map((social) => {
          return (
            <span key={social.id}>
              {social}:
              {CreateField({}, InputField, [], "contacts." + social, social)}
            </span>
          );
        })}
      </div>
      <div className={style.changePhoto}>
        <b>Change Photo Profile:</b>
        <div>
          <input onChange={onMainPhotoSelected} type={"file"}></input>
        </div>
      </div>
      <div className={style.buttonEditDiactiveted}>
        <button>save edit profile</button>
      </div>
    </form>
  );
};

const LoginRedux = reduxForm({ form: "editprofile" })(ProfileDataForm);

export default LoginRedux;
