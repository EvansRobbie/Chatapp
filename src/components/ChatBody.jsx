import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import { collection, query, orderBy, onSnapshot} from 'firebase/firestore'
import { db } from '../Firebase'
import SendMessages from './SendMessages'

const ChatBody = () => {
    const scroll = useRef(null)
    const [messages, setMessages] = useState([])
    useEffect(() =>{
        // send messages to the db
        const q = query(collection(db, 'messages'), orderBy('timestamp') )
        const unsubscribe = onSnapshot(q, (querySnapshot) =>{
            let messages = []
            querySnapshot.forEach((doc)=>{
                messages.push({...doc.data(), id:doc.id})
            })
            setMessages(messages)
        })
        return () => unsubscribe()
    }, [])

    useEffect(() =>{
        // show the lates message onpage load
        if (scroll.current && messages.length > 0){
            scroll.current.scrollIntoView({behavior:'smooth', block: 'end'})
        }
    }, [messages])
   
  return (
    <div className='relative w-full h-[90vh] overflow-x-auto  '>
        <img className='w-full h-full object-cover' src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg" alt="/" />
        <div  className='absolute top-0 left-0 my-4 px-5 pb-3 h-[80vh]  w-full overflow-y-auto '>
            {messages && messages.map((message, index)=>{
                
              return(
                <div
                 className='flex flex-col'
                 key= {message.id}
                 ref={index === messages.length - 1 ? scroll : null} 
                 > <Message   message = {message}/></div>
              ) 
            })}
            
        </div>
        <SendMessages scroll = {scroll}/>
        {/* <span ref = {scroll}></span> */}
    </div>
  )
}

export default ChatBody