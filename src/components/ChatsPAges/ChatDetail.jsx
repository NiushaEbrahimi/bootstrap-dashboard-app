import chats from "../../data/chats.json";
import ChatMessages from "./ChatMessages";
import "../../styles/ChatsPAges/ChatDetail.css";
import { useState, useEffect } from "react";

function ChatDetail({ chatID }) {
    const [status, setStatus] = useState("");
    const [chat, setChat] = useState(null);

    useEffect(() => {
        const foundChat = chats.find((e) => e.id == chatID);
        if (foundChat) {
            setChat(foundChat);
            setStatus(foundChat.status);
        }
    }, [chatID]);

    if (!chat) return <p>Loading...</p>;

    return (
        <main className="main-chat">
            <header className="header-messages-page">
                <h2>Ticket #{chat.id}</h2>
                <span>{status}</span>
            </header>

            <section className="request-details">
                <div>
                    <h4>title</h4>
                    <p>{chat.title}</p>
                </div>
                <div>
                    <h5>section</h5>
                    <p>{chat.section}</p>
                </div>
                <div>
                    <h5>group</h5>
                    <p>{chat.group}</p>
                </div>
            </section>

            <section className="chat">
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
