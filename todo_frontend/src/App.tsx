import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import HomePage from './pages/HomePage'

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

export default App