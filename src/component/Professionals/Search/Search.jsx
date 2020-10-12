import React from "react";
import { Field, reduxForm } from "redux-form";
import { InputField } from "../../common/FormsControls/FormsControls";
import style from "./Search.module.css"

const Search = ({searchName}) => {
  const onSubmit = (formData) => {
    searchName(formData.searchName)
}

  return <SearchReduxForm onSubmit={onSubmit} />;
};

export const SearchForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={style.inputField}>
        <Field
          component={InputField}
          name={"searchName"}
          placeholder={"Enter name professionals..."}
          size="50"
        />
      </div>
      <div className={style.infoSearch}>Сервер принимает только латинские буквы и цифры</div>
      <div>
        <button>Search</button>
      </div>
    </form>
  );
};

const SearchReduxForm = reduxForm({ form: "search" })(SearchForm);

export default Search;
