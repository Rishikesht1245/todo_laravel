import { useNavigate } from "react-router-dom";
import { RegisterAPI } from "../apiRoutes/api"
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  const navigate = useNavigate();

  // after successful login save the state locally and navigate to home page
  const loginHandler = () => {
    navigate("/login");
  }
  return (
    <div className="my-10">
      <RegisterForm loginHandler={loginHandler} onSubmit={RegisterAPI}/>
    </div>
  )
}

export default RegisterPage