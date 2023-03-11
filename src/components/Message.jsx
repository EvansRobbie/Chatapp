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
        message:`${message.image? 'rounded-tl-3xl rounded-tr-3xl p-2' : 'rounded-tl-full rounded-tr-full py-2  px-3' } flex items-center shadow-xl m-4  flex-wrap max-w-[500px]  `,
        sent: `${message.image? ' w-full max-w-[50vw] md:max-w-[30vw]  text-end float-right rounded-bl-3xl': '  text-end float-right rounded-bl-full'} bg-slate-200/70 bg-cover`,
        recieved: 'bg-red-500 text-black float-left  rounded-br-full text-white'
    }
    const messageClass =  message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.recieved}`
    
   
    return (
    <div className=''>
        <div className={`${style.message} ${messageClass}`}>
            <p className='absolute  text-teal-500 text-sm capitalize mt-[-5rem]'>{message.name}</p>
           <div className='flex flex-col items-center w-full h-full'>
           {message.image && (<img src={message.image} className='w-[50vw] rounded-2xl h-[18vh] md:h-[30vh] object-fit '/>)}
           <div className={`${message.image? 'flex items-center justify-between w-full ' : 'flex'} `}>
           <p className={`${message.image? ' text-sm text-center font-medium mr-[-4rem] h-full py-4 bg-slate-200/90 rounded-b-2xl w-full mt-[-4rem]' : ' text-sm font-medium mr-4'}`} >{message.text}</p>
            <p className='text-xs text-end mt-4 px-1'>{timeStringWithoutSeconds}</p>
           
           </div>
          
           </div>
          
        </div>
    </div>
  )
}

export default Message