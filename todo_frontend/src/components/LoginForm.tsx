import { useFormik } from "formik";
import { loginSchema } from "../schema/authSchema";
import { ILogin, ILoginResponse, IUser } from "../interfaces/auth";
import Input from "./Input";
import Button from "./Button";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
const LoginForm = ({ onSubmit, loginHandler }: LoginFormProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      onSubmit(values)
        .then((response: ILoginResponse) => {
          toast.success(response?.data?.message);
          loginHandler(response?.data?.user);
        })
        .catch(({ response: { data } }: { response: { data: any } }) => {
          setErrorMessage(data?.message || "Something went wrong");
        });
    },
  });
  return (
    <div className="form-container">
      <h3 className="text-indigo uppercase text-center">Welcome User</h3>
      <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
        <Input
          name="email"
          type="email"
          label="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.errors.email}
          touched={formik.touched.email}
        />

        <Input
          name="password"
          type="password"
          label="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.errors.password}
          touched={formik.touched.password}
        />
        <Button
          type="submit"
          className="bg-cyan-500 mt-5 uppercase tracking-wider"
        >
          Login
        </Button>
      </form>
      {errorMessage && (
        <span className="text-red-600 text-sm text-center font-medium ml-1">
          {errorMessage}
        </span>
      )}

      <span className="text-indigo text-sm font-semibold text-right">
        <Link to={"/register"}>New user ? Register here.</Link>
      </span>
    </div>
  );
};

interface LoginFormProps {
  loginHandler: (user: IUser) => void;
  onSubmit: (formData: ILogin) => any;
}

export default LoginForm;
