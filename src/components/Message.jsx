import React from 'react'
import { auth } from '../Firebase';

const Message = ({message}) => {
    const {timestamp} = message
    if(!timestamp) return null;
    const timestamps = timestamp
    const date = new Date(timestamps.seconds * 1000 + timestamps.nanoseconds / 1000000);
    const options = {hour12: false}
    const timeString = date.toLocaleTimeString('en-US', options);
    const timeStringWithoutSeconds = timeString.substring(0, timeString.lastIndexOf(':')); 
    const style = {
        message:`flex items-center shadow-xl m-4 py-2  px-3 flex-wrap max-w-[500px] rounded-tl-full rounded-tr-full `,
        sent: `bg-slate-200/70  text-end float-right rounded-bl-full word-`,
        recieved: 'bg-red-500 text-black float-left  rounded-br-full text-white'
    }
    const messageClass =  message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.recieved}`
    
   
    return (
    <div className=''>
        <div className={`${style.message} ${messageClass}`}>
            <p className='absolute text-teal-500 text-sm capitalize mt-[-5rem]'>{message.name}</p>
           
           <p className='text-sm font-medium mr-4 '>{message.text}</p>
            <p className='text-xs text-end mt-4 px-1'>{timeStringWithoutSeconds}</p>
           
        </div>
    </div>
  )
}

export default Message