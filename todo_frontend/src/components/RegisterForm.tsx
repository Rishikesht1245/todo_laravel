import { useFormik } from "formik";
import { registerSchema } from "../schema/authSchema";
import { IRegister } from "../interfaces/auth";
import Input from "./Input";
import Button from "./Button";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = ({ onSubmit, loginHandler }: LoginFormProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      onSubmit(values)
        .then((response: any) => {
          toast.success(response?.data?.message);
          loginHandler();
        })
        .catch(({ response: { data } }: { response: { data: any } }) => {
          setErrorMessage(data?.message || "Something went wrong");
        });
    },
  });
  return (
    <div className="form-container">
      <h3 className="text-indigo uppercase text-center">Create Your Account</h3>
      <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
        <Input
          name="name"
          type="name"
          label="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={formik.errors.name}
          touched={formik.touched.name}
        />
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
        <Input
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          error={formik.errors.confirmPassword}
          touched={formik.touched.confirmPassword}
        />
        <Button
          type="submit"
          className="bg-cyan-500 mt-5 uppercase tracking-wider"
        >
          Register
        </Button>
      </form>
      {errorMessage && (
        <span className="text-red-600 text-sm text-center font-medium ml-1">
          {errorMessage}
        </span>
      )}

      <span className="text-indigo text-sm font-semibold text-right">
        <Link to={"/login"}>Already have an account ? Login</Link>
      </span>
    </div>
  );
};

interface LoginFormProps {
  onSubmit: (formData: IRegister) => any;
  loginHandler: () => any;
}

export default RegisterForm;
