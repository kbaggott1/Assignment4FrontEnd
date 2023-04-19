import { useState } from "react";
import { RefreshMessages } from "./RefreshMessages";

/**
 * A component that contains a form to send a message
 * @prop messages: current list of messages
 * @prop setMessages: A setter method to change the state of the messages
 * @returns A form to send a message
 */
export function SendMessageForm({messages, setMessages}) {
    const [messageBody, setMessageBody] = useState();
    const [username, setUserName] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("before refresh: " + messages);
        if(messages < 1) {
            messages = await RefreshMessages(setMessages);
        }
        console.log("after refresh:");
        console.log(messages);
        console.log((messages.length > 0 ? messages.slice(-1)[0].messageId + 1 : 0))

        const requestOptions = {
            method: "POST",
            body: JSON.stringify({
                messageId: (messages.length > 0 ? messages.slice(-1)[0].messageId + 1 : 0),
                message: messageBody,
                user: username,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        };

        const response = await fetch("http://localhost:1339/messages", requestOptions);

        if(response.status == 200) {
            await RefreshMessages(setMessages);
        }


    };

    return <>
    <div className="sendMessageForm">
        <h3>Send message</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Message..." onChange={(e) => setMessageBody(e.target.value)} />
            <input type="text" placeholder="Username..." onChange={(e) => setUserName(e.target.value)} />
            <button className="sendButton" type="submit" disabled={messageBody && username ? false : true}>Send</button>
        </form>
    </div>
    </>
}