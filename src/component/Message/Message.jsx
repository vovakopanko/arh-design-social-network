import React from "react";
import style from "./Message.module.css";
import user from "./../../assets/images/user.png";
import rubbish from "./../../assets/images/rubbish.png";
import { Field, reduxForm } from "redux-form";
import { InputMessage } from "../common/FormsControls/FormsControls";
import Preloader from "../common/Preloader/Preloader";
import Moment from "react-moment";

const Message = ({
  messages,
  message,
  getMessageWhithUser,
  getMessageWithAllUser,
  postMessageForUser,
  deleteMessageWhithUser,
  tap,
  handlesubmit,
  getCurrentIdUser,
  currentUserId,
  GetListWhithNewMessage,
  setUnreadMessage,
  portionSize,
  userName,
  isFechingForDialogs,
  ...props
}) => {
  let messageUser = messages.map((m) => (
    <span
      key={m.id}
      onClick={() => {
        getMessageWhithUser(m.id, true, m.userName);
      }}
    >
      <div className={style.user__block}>
        <div>
          <img src={m.photos.small || user} alt="userPhoto" />
          <div>
            <b>{m.userName}</b>
          </div>
        </div>
      </div>
    </span>
  ));

  const onAddMessage = (value) => {
    postMessageForUser(currentUserId, value.NewMessageUser);
  };

  return (
    <div className={style.message}>
      <div className={style.block__title + " " + style.block__title_border}>
        {userName ? (
          <span>
            <div>
            Dialog with:
              <span className={style.block__title_color}> {"  " + userName}</span>:
            </div>
          </span>
        ) : (
          <span>Messages:</span>
        )}
      </div>
      <div className={style.message__block}>
        <div className={style.block__users}>
          <div className={style.users__user}>{messageUser}</div>
        </div>

        <div className={style.block__dialogs}>
          {isFechingForDialogs ? (
            <Preloader />
          ) : (
            <MessageWithUser
              message={message}
              deleteMessageWhithUser={deleteMessageWhithUser}
              tap={tap}
              onAddMessage={onAddMessage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const MessageWithUser = ({
  message,
  deleteMessageWhithUser,
  tap,
  onAddMessage,
}) => {
  return (
    <div className={style.lo}>
      <div className={style.dialogs__items}>
        {message.map((p) => (
          <div className={style.dialogs__item} key={p.id}>
            <span className={style.body__name}>{p.senderName}:</span>
            <span className={style.body__message}>{p.body}</span>
            <span className={style.item__time}>
              <Moment format="YYYY-M-D H:m" parse="YYYY-MM-DD HH:mm">
                {p.addedAt}
              </Moment>
            </span>
            {p.recipientId ? (
              <span
                className={style.body__message_delete}
                onClick={() => {
                  deleteMessageWhithUser(p.id, p.recipientId);
                }}
              >
                <img src={rubbish} alt="rubbishBin"></img>
              </span>
            ) : null}
          </div>
        ))}
        <div className={style.dialogs__button}>
          {tap ? <NewMessageForm onSubmit={onAddMessage} /> : null}
        </div>
      </div>
    </div>
  );
};

const AddNewMessage = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={style.dialogs__sendBlock}>
      <div>
        <Field
          className={style.dialogs__text}
          placeholder="Write your message..."
          component={InputMessage}
          name={"NewMessageUser"}
        />
      </div>
      <div>
        <button className={style.dialogs__button_color}>SEND</button>
      </div>
    </form>
  );
};

const NewMessageForm = reduxForm({ form: "postMessageForUser" })(AddNewMessage);

export default Message;
