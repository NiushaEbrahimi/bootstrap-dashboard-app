import ChatMessages from "./ChatMessages";
import "../../styles/ChatsPAges/ChatDetail.css";
import { useState, useEffect } from "react";

function ChatDetail({ chatID,chats }) {

    const [status, setStatus] = useState("");
    const [chat, setChat] = useState(null);

    useEffect(() => {
        const foundChat = chats.find((e) => e.id == chatID);
        if (foundChat) {
            setChat(foundChat);
            setStatus(foundChat.status);
        }
    }, [chatID, chats]);

    if (!chat) return <p>Loading...</p>;

    return (
        <main className="main-chat vw-100 vh-100 p-5 fs-3 overflow-hidden bgc-darker-light">
            <header className="w-100 d-flex justify-content-between">
                <h2>Ticket #{chat.id}</h2>
                <span 
                    className="p-2 rounded-4 fs-5"
                    style={{ backgroundColor: status === "در انتظار پاسخ" || status === "ایجاد شده"? "#ffa51d58" : "#b4ff1d58" 
                        ,color: status === "در انتظار پاسخ" || status === "ایجاد شده"? "#a52a2a" : "#32951a" 
                    }}
                >{status}</span>
            </header>

            <section className="request-details p-3 rounded-4 shadow d-flex flex-row justify-content-between align-items-center bgc-light">
                <div>
                    <h4>title</h4>
                    <p className="fs-6">{chat.title}</p>
                </div>
                <div>
                    <h5>section</h5>
                    <p className="fs-6">{chat.section}</p>
                </div>
                <div>
                    <h5>group</h5>
                    <p className="fs-6">{chat.group}</p>
                </div>
            </section>

            <section className="chat w-100 h-100 p-4 bgc-light shadow rounded-4">
                <ChatMessages
                    messages={chat.messages}
                    status={status}
                    setStatus={setStatus}
                />
            </section>
        </main>
    );
}

export default ChatDetail;
