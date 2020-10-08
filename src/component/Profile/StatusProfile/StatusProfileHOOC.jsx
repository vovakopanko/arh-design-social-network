import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from "./Status.module.css"

const StatusProfileHOOC = (props) => {
  let [EditMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activatedChangeText = () => {
    setEditMode(true);
  };
  const deactivatedChangeText = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      {!EditMode ? (
        <div>
          <span className={style.hoverStatus} onDoubleClick={activatedChangeText}>
          {props.status || "---------"}
          </span>
        </div>
      ) : (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivatedChangeText}
            onChange={onStatusChange}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default StatusProfileHOOC;
