import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import { AppDispatch, RootState } from './store/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { routes } from './utils/routes'
import { Suspense } from 'react'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout/>}>
           {routes.map((route) => (
           <Route
              key={route.path}
              path={route.path}
              element={<Suspense fallback={<div>Loading...</div>}><route.component/></Suspense>}
            />
           ))}
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

//  type of the useDispatch function
type DispatchFunc = () => AppDispatch;
// useDispatch function with type === useAppDispatch
export const useAppDispatch: DispatchFunc = useDispatch;

//use Selector function with types === useAppSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default App