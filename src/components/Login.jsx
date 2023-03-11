import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
         <div className='w-20 h-8 md:w-24 rounded-lg bg-slate-200 active:scale-105 hover:shadow-teal-500 shadow-lg flex items-center justify-center'>
        <Link to='/signIn' className='text-slate-900 font-medium text-sm md:text-base'>Login</Link>
    </div>
    </div>
  )
}

export default Login