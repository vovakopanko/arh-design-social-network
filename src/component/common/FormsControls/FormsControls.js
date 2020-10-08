import React from "react";
import style from "./FormsControls.module.css"

export const Textarea = ({input,meta:{error,touched}, ...props}) => {
    let showError = error && touched 
  return (
    <div className={style.formControl + " " + (showError ? style.error: " ")} >
        <div>
        <textarea {...input} {...props} />
        </div>
      <div>
          { showError && <span>{error}</span>}
      </div>
    </div>
  );
};

export const InputField = ({input,meta:{error, touched}, ...props}) => {
    let showError = error && touched 
  return (
    <div className={style.formControl + " " + (showError ? style.error: " ")} >
        <div>
        <input {...input} {...props}/>
        </div>
      <div>
          { showError && <span>{error}</span>}
      </div>
    </div>
  );
};
