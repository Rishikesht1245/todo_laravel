import { useAppSelector } from "../App";
import { Navigate, Outlet } from "react-router-dom";
import { getLocalData } from "./localstorage";

const ProtectedRoute = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth) || getLocalData("isAuth");
  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
