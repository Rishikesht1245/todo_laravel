import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../App";
import { LoginAPI } from "../apiRoutes/api"
import LoginForm from "../components/LoginForm";
import { login } from "../store/authSlice";
import {  IUser } from "../interfaces/auth";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // after successful login save the state locally and navigate to home page
  const loginHandler = (user:IUser) => {
    dispatch(login(user));
    navigate("/");
  }
  return (
    <div className="my-10">
      <LoginForm loginHandler={loginHandler} onSubmit={LoginAPI}/>
    </div>
  )
}

export default LoginPage