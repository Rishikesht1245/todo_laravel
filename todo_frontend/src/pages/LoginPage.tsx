import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../App";
import { LoginAPI } from "../apiRoutes/api"
import LoginForm from "../components/LoginForm";
import { ILogin } from "../interfaces/auth"
import { login } from "../store/authSlice";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // after successful login save the state locally and navigate to home page
  const loginHandler = () => {
    dispatch(login());
    navigate("/");
  }
  return (
    <div>
      <LoginForm loginHandler={loginHandler} onSubmit={LoginAPI}/>
    </div>
  )
}

export default LoginPage