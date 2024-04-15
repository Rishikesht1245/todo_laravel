import React from 'react'
import { todoLogo } from '../assets/image'
import { useAppDispatch, useAppSelector } from '../App'
import { Link } from 'react-router-dom';
import { logout } from '../store/authSlice';
import { getLocalData } from '../utils/localstorage';

const Header = () => {

  const isAuth = useAppSelector((state) => state.auth.isAuth) || getLocalData("isAuth");
  const dispatch = useAppDispatch();
  return (
    <div className='parent-container flex flex-between h-[80px] bg-[#0f1c31] fixed top-0'>
      <div className="flex flex-center gap-5">
        <img src={todoLogo.src} alt={todoLogo.alt} width={38} height={38}/>
        <h4 className='text-indigo'>TO-DO</h4>
      </div>
      {isAuth ? (<button onClick={() => dispatch(logout())} className='heading-5 text-indigo uppercase'>Log out</button>) : (<Link to={"/login"} className='heading-5 text-indigo uppercase'>Login</Link>)}
      
    </div>
  )
}

export default Header