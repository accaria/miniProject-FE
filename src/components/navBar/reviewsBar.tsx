"use client"
import BackHomeBar from "./backHomeBar"
import { useState, useEffect,useRef } from "react"

export default function ReviewsBar(){
    const [text,setText]= useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // reset first
      textarea.style.height = `${textarea.scrollHeight}px`; 
    }
  }, [text]);
  const [submit,setSubmit] = useState(false);
  useEffect(()=>{
    if (submit){
        setText("");
        setTimeout(()=>{
        setSubmit(false);
        },3000);
    }
  },[submit]);

    return(
        <>
        <div className="flex flex-col justify-center items-center space-y-5">
            <div><img src="ticketLogo.png" alt="Ticket Logo" /></div>
            <div className="mb-5"><BackHomeBar/></div>
            <div className="text-2xl lg:text-4xl font-bold text-center">
                Let us know what you think about this event!
            </div>
            <div className="w-full text-center">
            <textarea 
            ref={textareaRef}
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="Let us hear your thoughts" 
            rows={4}
            className="w-6/8 lg:w-4/8 p-2 border rounded overflow-hidden"/>
            </div>
            {submit && (
            <div> 
            Review submitted, thank you!    
            </div>)} 
            <div>
            <button onClick={()=>setSubmit(true)} className="bg-amber-500 p-5 rounded-2xl font-bold">Submit Review</button>   
            </div>                                                                            
        </div>
        </>
    )
}