import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address.")
    .required("Email is required."),
  password: Yup.string().required("Password is required."),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Name should be 3 charcters long.")
    .max(50, "Name should be less than 50 characters.")
    .required("Name is required."),
  email: Yup.string()
    .email("Invalid email address.")
    .required("Email is required."),
  password: Yup.string()
    .trim()
    .min(6, "Password should be 6 characters long.")
    .max(16, "Password should be less than 16 characters.")
    .required("Password is required."),
  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref("password")], "Password must match.")
    .required("Confirm password is required."),
});
