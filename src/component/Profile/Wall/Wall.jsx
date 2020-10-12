import React from "react";
import { Field, reduxForm } from "redux-form";
import Post from "./../Post";
import style from "./../Profile.module.css";
import {
  maxLengthCreator,
  required
} from "../../../utils/validator/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

let Wall = (props) => {
  const onAddPost = (value) => {
    props.AddPost(value.NewPostProfile);
  };

  let ElementPostData = props.postData.map((post) => (
    <Post
      key={post.key}
      photo={post.photo}
      name={post.name}
      message={post.message}
      likesCount={post.likesCount}
    />
  )).reverse();
  return (
    <div className={style.wall}>
      <div>СТЕНА :</div>
      <div className={style.blocMessageOnWall}>
      <PostDataForm onSubmit={onAddPost} />
       
      </div>
      {!props.isOwner ? <div>{ElementPostData}</div>: <span>Нету записей на стене</span>}
    </div>
  );
};

const maxLength10 = maxLengthCreator(30);

const addNewPostForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            validate={[required, maxLength10]}
            placeholder="Write your post..."
            component={Textarea}
            name={"NewPostProfile"}
            rows="4"
            cols="60"
          />
        </div>
        <div>
          <button>Send post</button>
        </div>
      </form>
    </div>
  );
};

const PostDataForm = reduxForm({ form: "posProfileAddNewPostFormtData" })(
  addNewPostForm
);

export default Wall;
