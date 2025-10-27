import image from "../../assets/images/profile.jpeg"
import { useEffect, useState } from "react";
import dayjs from 'dayjs'
import jalaliday from 'jalaliday/dayjs'

function ChatMessages({messages,status,setStatus}){
    dayjs.extend(jalaliday)
    const [newMessages,setNewMessages] = useState(messages)
    const [userText , setUserText] = useState("")
    const [inputValue,setInputValue] = useState("")
    useEffect((()=>
        console.log(newMessages)
    ),[newMessages])
    return(
        <>
            <h4>Messaegs</h4>
            <div className="chat-messages-container">
                {newMessages.map((chat)=>{
                    return(
                        <div 
                            key={chat.id}
                            className="message"
                            style={{ direction: chat.sender === "user" ? "rtl" : "ltr" }}
                        >
                            <div className="image-container">
                                <img src={image}/>
                            </div>
                            <p>{chat.text}</p>
                        </div>
                    )
                })}
            </div>
            <form className="form-message-input"
                action=""
                onSubmit={(e) => {
                    e.preventDefault()
                    setNewMessages([...newMessages,{
                        "sender":"user",
                        "text":userText,
                        "timestamp":dayjs().calendar("jalali").format("YYYY/MM/DD - HH:mm")}
                    ])
                    setInputValue("")
                    setStatus("ایجاد شده")
                    console.log(newMessages)
                }}
            >
                <input
                    disabled={status==="در انتظار پاسخ" ? false : true}
                    className="input-message-input" 
                    type="text" 
                    placeholder="Message ..."
                    value={inputValue}
                    onChange={(text)=>{
                        setInputValue(text.target.value)
                        setUserText(text.target.value)
                    }}
                />
                <button
                    className="button-message-input" 
                    type="submit"
                    disabled={status==="در انتظار پاسخ" ? false : true}
                >send</button>
            </form>
        </>
    )
};
export default ChatMessages;