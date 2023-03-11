import React from 'react'
import LogOut from './LogOut'
import { auth } from '../Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from './Login'


const Navbar = () => {
    const [user] = useAuthState(auth)
  return (
    <div className='w-full h-[10vh] bg-slate-900 px-4 flex items-center justify-between'>
        <div className='w-14 h-14 rounded-full border-4 border-slate-200 overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://cdn.pixabay.com/photo/2016/03/23/08/34/woman-1274361__340.jpg" alt="" />
        </div>
        {user ? <LogOut/> : <Login/>}
       
        
    </div>
  )
}

export default Navbar