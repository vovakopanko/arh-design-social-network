import React from "react";
import { Field, reduxForm } from "redux-form";
import Post from "./../Post";
import style from "./../Profile.module.css";
import { InputWall} from "../../common/FormsControls/FormsControls";

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
    <div className={style.wall__input}  >
      <div>СТЕНА :</div>
      <div>
      <PostDataForm onSubmit={onAddPost} />
      </div>
      {!props.isOwner ? <div>{ElementPostData}</div>: <span>Нету записей на стене</span>}
    </div>
  );
};

const addNewPostForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field 
            placeholder="Write your post..."
            component={InputWall}
            name={"NewPostProfile"}
            // size="50"
          />
        </div>
        <div>
          <button className={style.general__button}>Send post</button>
        </div>
      </form>
    </div>
  );
};

const PostDataForm = reduxForm({ form: "posProfileAddNewPostFormtData" })(
  addNewPostForm
);

export default Wall;
