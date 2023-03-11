import React from 'react'
import svg  from '../assets/login.svg'
import Login from './Login'

const NoMessages = () => {
  return (
    <div className='relative w-full h-[80vh] my-20 flex flex-col gap-4 items-center'>
        <div className='h-[60vh] w-full'>
            <img className='w-full h-full' src={svg} alt="svg" />
        </div>
        <p className='text-xl italic text-slate-900 capitalize font-bold'>Login to experience it all.</p>
       
    </div>
  )
}

export default NoMessages