import image from "../../assets/images/profile.jpeg"
import { useState } from "react";
import dayjs from 'dayjs'
import jalaliday from 'jalaliday/dayjs'

dayjs.extend(jalaliday)

function ChatMessages({messages,status,setStatus}){
    
    const [newMessages,setNewMessages] = useState(messages)
    const [userText , setUserText] = useState("")
    const [inputValue,setInputValue] = useState("")

    return(
        <>
            <h4>Messaegs</h4>
            <div 
                className="overflow-y-scroll h-100 bgc-dark p-3 rounded-4"
                style={{position:"relative"}}
            >
                {newMessages.map((chat)=>{
                    return(
                        <div 
                            key={chat.id}
                            className="d-flex flex-row align-items-center justify-content-start p-2 pt-3 pb-3 mb-1 rounded bg-light"
                            style={{ direction: chat.sender === "user" ? "rtl" : "ltr" }}
                        >
                            <div>
                                <img src={image}
                                style={{width:"30px",height:"30px",borderRadius:"50%"}}
                                className="d-flex justify-content-center align-items-center ms-1 me-1"/>
                            </div>
                            <div className="d-flex align-items-center">
                                <p className="fs-6 m-0" style={{direction:"rtl"}}>{chat.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <form className="w-100 d-flex justify-content-center align-items-center flex-row p-3 mt-1"
                action=""
                onSubmit={(e) => {
                    e.preventDefault()
                    setNewMessages([...newMessages,{
                        "sender":"user",
                        "text":userText,
                        "timestamp":dayjs().calendar("jalali").format("YYYY/MM/DD - HH:mm")}
                    ])
                    setInputValue("")
                    setStatus("در حال انجام")
                }}
            >
                <input
                    disabled={status!=="در انتظار پاسخ"}
                    className="rounded-4 p-2 fs-6 w-100" 
                    style={{direction:"rtl"}}
                    type="text" 
                    placeholder=" پیام خود را بنویسید ..."
                    value={inputValue}
                    onChange={(text)=>{
                        setInputValue(text.target.value)
                        setUserText(text.target.value)
                    }}
                />
                <button
                    className="form-message-button ps-4 pe-4 pt-2 pb-2 rounded-4 fs-5 ms-1"
                    style={{backgroundColor:"var(--color-6)",cursor:"pointer"}} 
                    type="submit"
                    disabled={status!=="در انتظار پاسخ"}
                >send</button>
            </form>
        </>
    )
};
export default ChatMessages;