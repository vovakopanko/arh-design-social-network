import React from "react";
import { Field } from "redux-form";

export const required = (value) => {
  if (value) {
    return undefined;
  }
  return "Field is required";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max symbols is ${maxLength}`;
  return undefined;
};

export const CreateField = (type, component, validate, name, placeholder) => {
  return (
    <Field
      type={type}
      component={component}
      validate={validate}
      name={name}
      placeholder={placeholder}
    />
  );
};
