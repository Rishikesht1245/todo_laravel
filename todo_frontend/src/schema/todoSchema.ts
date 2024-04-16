import * as Yup from "yup";

export const todoSchema = Yup.object().shape({
    todo: Yup.string().required("Enter your todo"),
  });