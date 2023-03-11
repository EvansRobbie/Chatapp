import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { auth, db, storage } from '../Firebase'
import {GoSmiley} from 'react-icons/go'
import {AiOutlinePaperClip} from 'react-icons/ai'
import EmojiPicker, {Theme} from 'emoji-picker-react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import {RxCross2} from 'react-icons/rx'
const SendMessages = () => {
  
    const [message, setMessage] = useState('')
    const [emojiPicker, setEmojiPicker] = useState(false)
    const [images, setImages] = useState(null)
    const [showImagePreview, setShowImagePreview] = useState(false)
    const sendMessage =  async (e) =>{
        e.preventDefault()
        if (message === '' && images === null){
            alert('Please type something..')
            return
        }
        let imageUrl = null
        if (images){
            // upload images
            try {
                const storageRef = ref(storage, `images/${images.name}`)
                await uploadBytes(storageRef, images).then(async(snapshot) =>{
                    imageUrl = await getDownloadURL(snapshot.ref)
                    // console.log(imageUrl)
                    
                })
            } catch (error) {
                console.error("Error uploading image:", error);
                alert("Error uploading image. Please try again.");
                return;
              }
           
        }
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text:message,
            name:displayName,
            uid,
            timestamp: serverTimestamp(),
            image : imageUrl
        })
        setMessage('')
        handleClick()
        // console.log(scroll.current)
      
    }
    const handleChange = (e) =>{
        setMessage(e.target.value)
    }
    const handleEmoji = (emojiObject) =>{
        setMessage(message + emojiObject.emoji)
        setEmojiPicker(false)
    }

    const handleImage = (e) =>{
        const selectedImage =  e.target.files[0]
        setImages(selectedImage)
        setShowImagePreview(true)
      // Create a URL for the selected image
    const imagePreviewUrl = URL.createObjectURL(selectedImage);

    // Display the image in the <img> tag with id 'image-preview'
    const imagePreview = document.getElementById('image-preview');
    if (imagePreview) {
        imagePreview.src = imagePreviewUrl;
        // Make sure the image is visible
        imagePreview.classList.remove('hidden') 
    }
   
    setMessage('')
    
   
    }
    const handleClick = () =>{
        setImages(null);
        const imagePreview = document.getElementById('image-preview');
        if (imagePreview) {
            imagePreview.src = null;
            imagePreview.classList.add('hidden');
        }
        setShowImagePreview(false);
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
            <label htmlFor="upload_image"><AiOutlinePaperClip size={30} /></label>
            <div >
                <img id="image-preview" className="absolute hidden p-2 rounded-xl overflow-hidden bg-slate-900 left-0 w-full h-[30vh] bottom-14 z-100" />
                    <RxCross2 size={25} onClick={handleClick} className=' absolute right-4 bottom-56 z-50'/>
            </div>
            <input type="file" id='upload_image' onChange={handleImage} className='hidden' />
            <input type="text" value={message} onChange={handleChange} className='w-full outline-none bg-slate-900/10 py-3 px-4 rounded-l-xl placeholder:text-gray-900  text-sm font-bold' placeholder='Type Here..'/>
            </div>
           
            <button onClick={sendMessage} className='bg-teal-500 text-sm w-20 rounded-r-xl active:scale-105 font-bold'>Send</button>
        </form>
      
    </div>
  )
}

export default SendMessages