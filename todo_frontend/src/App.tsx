import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import HomePage from './pages/HomePage'
import { AppDispatch, RootState } from './store/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout/>}>
            <Route path='/' element={<HomePage/>}></Route>
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