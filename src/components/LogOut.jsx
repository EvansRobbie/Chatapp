import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../Firebase'

const LogOut = () => {
    const logout = () =>{
        signOut(auth)
    }
  return (
    <div className='w-20 h-8 md:w-24 rounded-lg bg-red-500/90 active:scale-105 hover:shadow-teal-500 shadow-lg flex items-center justify-center'>
        <button onClick={logout} className='text-slate-200 text-sm md:text-base font-medium'>Logout</button>
    </div>
  )
}

export default LogOut