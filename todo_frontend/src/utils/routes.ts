import { lazy } from "react";

const HomePage = lazy(()=> import("../pages/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"))
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const CompletedPage = lazy(() => import("../pages/CompletedPage"));

export const routes = [
    {
        path: "/register",
        component : RegisterPage,
    },
    {
        path: "/login",
        component : LoginPage
    },
    

]

export const protectedRoutes = [
    {
        path: "/",
        component : HomePage
    },
    {
        path : "/completed",
        component : CompletedPage
    }
]