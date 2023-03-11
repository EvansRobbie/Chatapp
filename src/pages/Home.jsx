import React from 'react'
import { auth } from '../Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import NoMessages from '../components/NoMessages'
import ChatBody from '../components/ChatBody'
import Navbar from '../components/Navbar'

const Home = () => {
  const [user] = useAuthState(auth)
  return (
    <div>
        <Navbar/>
        {user ?  <ChatBody/> : <NoMessages/>}
       
    </div>
  )
}

export default Home