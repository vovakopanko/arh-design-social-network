import React from "react";
import { Field, reduxForm } from "redux-form";
import { InputField } from "../../common/FormsControls/FormsControls";
import style from "./Search.module.css";

const Search = ({ searchName }) => {
  const onSubmit = (formData) => {
    searchName(formData.searchName);
  };

  return <SearchReduxForm onSubmit={onSubmit} />;
};

export const SearchForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={style.professionals__search}>
        <Field
          component={InputField}
          name={"searchName"}
          placeholder={"Enter name professionals..."}
        />
      </div>
      <div className={style.professionals__search_info}>
        Сервер принимает только латинские буквы и цифры
      </div>
      <div>
        <button className={style.professionals__button}>Search</button>
      </div>
    </form>
  );
};

const SearchReduxForm = reduxForm({ form: "search" })(SearchForm);

export default Search;
