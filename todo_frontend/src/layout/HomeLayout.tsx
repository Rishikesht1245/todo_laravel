import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const HomeLayout = () => {
  return (
    <div className='flex flex-col flex-between min-h-[100vh]'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default HomeLayout