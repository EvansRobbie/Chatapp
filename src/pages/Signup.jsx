import React from 'react'
import GoogleButton from 'react-google-button'
import { auth } from '../Firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import {  useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  console.log(user)
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
    navigate('/')
  }
  return (
    <div className='relative w-full h-screen'>
        <div className='absolute top-0 left-0 bg-black/40 w-full h-full opacity-100 z-10'/>
        <img className='w-full h-full object-cover' src="https://cdn.pixabay.com/photo/2021/03/22/14/19/internet-6114801__340.jpg" alt="/" />
        <div className='absolute top-[50%] rounded-lg shadow-2xl hover:shadow-blue-500 overflow-hidden left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-100 z-20'>
            <GoogleButton className='active:scale-105 'onClick={googleSignIn}/>
        </div>
    </div>
  )
}

export default Signup