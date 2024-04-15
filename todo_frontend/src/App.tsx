import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import { AppDispatch, RootState } from "./store/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { protectedRoutes, routes } from "./utils/routes";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./utils/ProtectedRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>

            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <route.component />
                  </Suspense>
                }
              />
            ))}

            <Route element={<ProtectedRoute/>}>
              {protectedRoutes?.map((route) => (
                  <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <route.component />
                    </Suspense>
                  }
                />
              ))}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

//  type of the useDispatch function
type DispatchFunc = () => AppDispatch;
// useDispatch function with type === useAppDispatch
export const useAppDispatch: DispatchFunc = useDispatch;

//use Selector function with types === useAppSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default App;
