import { ChatBox } from "../components/MessageComponents/ChatBox"
import { useState } from "react";
import './Messages.css';
import { UserControls } from "../components/MessageComponents/UserControls";
/**
 * Component of the messages page
 */
export function Messages() {
    const [messages, setMessages] = useState([]);

    //const test = document.getElementsByClassName("chatBox")[0];
    return <div>
        <h1>Messages</h1>
        <ChatBox messages={messages} setMessages={setMessages} />
        <UserControls messages={messages} setMessages={setMessages} />
    </div>
}