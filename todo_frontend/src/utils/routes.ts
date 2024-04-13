import { lazy } from "react";

const HomePage = lazy(()=> import("../pages/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"))

export const routes = [
    {
        path: "/",
        component : HomePage,
    },
    {
        path: "/login",
        component : LoginPage
    },

]