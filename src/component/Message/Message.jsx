import React from "react";
import style from "./Message.module.css";
import user from "./../../assets/images/user.png";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { useState } from "react";
import Preloader from "../common/Preloader/Preloader";

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
  // HOOC on change portionNumber for paginator Dialog User
  let [portionNumber, setNewPortionNumber] = useState(1);

  let totalMessagesCount = messages.length;
  let portionCount = Math.ceil(totalMessagesCount / portionSize);
  let rightPageNumber = portionSize * portionNumber;

  // Get all Dialogs with User
  let messageUser = messages.map((m) => (
    <span
      onClick={() => {
        getMessageWhithUser(m.id, true, m.userName);
      }}
    >
      <div className={style.blocUser}>
        <b>{m.userName}</b>
        <div>
          <img src={m.photos.small || user} width="70" height="70" />
          <div>
            New Message: <b>{" " + m.newMessagesCount}</b>
          </div>
        </div>
      </div>
    </span>
  ));

  const onAddMessage = (value) => {
    postMessageForUser(currentUserId, value.NewMessageUser);
  };

  return (
    <div className={style.title}>
      <div className={style.headLeft}>
        <div className={style.messageBloc}>
          <div className={style.fotoNameBlock}>
            <div>
              <b className={style.titleDialogs}>ВСЕ ДИАЛОГИ: </b>
              {messageUser.slice(0, rightPageNumber)}
              <div>
                {portionCount > portionNumber && (
                  <button
                    className={style.moreMessages}
                    onClick={() => {
                      setNewPortionNumber(portionNumber + 1);
                    }}
                  >
                    More messages
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className={style.messageTimeBlock}>
            {userName ? (
              <span className={style.titleMessage}>
                COOБЩЕНИЯ c {userName}:
              </span>
            ) : (
              <span className={style.titleMessage}>COOБЩЕНИЯ:</span>
            )}
            <div className={style.messageData}>
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
    <div className={style.mainBlocMessages}>
      <div className={style.messageBlocWithUser}>
        {message.map((p) => (
          <div className={style.hol}>
            <span className={style.ho2}>
              <div>
                <span className={style.userName}>{p.senderName}:</span>
              </div>
              {p.body}
            </span>
            <span className={style.timeInfo}>
              {p.addedAt}
              {p.recipientId ? (
                <span
                  className={style.butDel}
                  onClick={() => {
                    deleteMessageWhithUser(p.id, p.recipientId);
                  }}
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/64/64022.png"
                    width="30"
                    height="30"
                  ></img>
                </span>
              ) : null}
            </span>
          </div>
        ))}
      </div>
      <div className={style.sendMesageBloc}>
        {tap ? <NewMessageForm onSubmit={onAddMessage} /> : null}
      </div>
    </div>
  );
};

const AddNewMessage = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            placeholder="Write your message..."
            component={Textarea}
            name={"NewMessageUser"}
            rows="6"
            cols="60"
          />
        </div>
        <div>
          <button>SEND MESSAGE</button>
        </div>
      </form>
    </div>
  );
};

const NewMessageForm = reduxForm({ form: "postMessageForUser" })(AddNewMessage);

export default Message;
