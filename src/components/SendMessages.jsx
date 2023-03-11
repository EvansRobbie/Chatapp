import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { auth, db } from '../Firebase'
import {GoSmiley} from 'react-icons/go'
import EmojiPicker, {Theme} from 'emoji-picker-react'
const SendMessages = () => {
  
    const [message, setMessage] = useState('')
    const [emojiPicker, setEmojiPicker] = useState(false)
    const sendMessage =  async (e) =>{
        e.preventDefault()
        if (message === ''){
            alert('Please type something..')
            return
        }
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text:message,
            name:displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setMessage('')
        // console.log(scroll.current)
      
    }
    const handleChange = (e) =>{
        setMessage(e.target.value)
    }
    const handleEmoji = (emojiObject) =>{
        setMessage(message + emojiObject.emoji)
        setEmojiPicker(false)
    }
    // useEffect(() =>{
    //     if (scroll.current){
    //         scroll.current.scrollIntoView({behavior: 'smooth', block: 'end'})
    //     }
    // }, [scroll, message])
  return (
    <div className='absolute left-[50%] translate-x-[-50%] translate-y-[-20%] bottom-0 w-full max-w-[500px] rounded-xl  bg-slate-200 items-center jus px-5 py-2 m-auto flex '>
        <form action="" className='w-full flex '>
            <div className='flex items-center  gap-4 w-full'>
                <div className='absolute left-0 bottom-14 w-full '>
                {emojiPicker&& <EmojiPicker 
                onEmojiClick = {handleEmoji } 
                width = {500}
                height ={350}
                theme = {Theme.DARK}
                size={30}
                />}
                </div>
                
            <GoSmiley onClick={()=> setEmojiPicker(!emojiPicker)} size={30} className='cursor-pointer'/>
            <input type="text" value={message} onChange={handleChange} className='w-full outline-none bg-slate-900/10 py-3 px-4 rounded-l-xl placeholder:text-gray-900  text-sm font-bold' placeholder='Type Here..'/>
            </div>
           
            <button onClick={sendMessage} className='bg-teal-500 text-sm w-20 rounded-r-xl active:scale-105 font-bold'>Send</button>
        </form>
      
    </div>
  )
}

export default SendMessages