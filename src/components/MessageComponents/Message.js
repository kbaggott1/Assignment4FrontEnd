import './Message.css';
import { useState } from 'react';
import { RefreshMessages } from './RefreshMessages';

/**
 * Component that displays the message body and author
 * @prop messageBody: The message body
 * @prop username: user who sent the message
 */
export function Message({messageId, messageBody, username, setMessages}) {
    const [visibility, setVisibility] = useState("hidden");

    const deleteMessage = async () => {

        const requestOptions = {
            method: "DELETE",
            body: JSON.stringify({
                messageId: messageId,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        };

        const response = await fetch("http://localhost:1339/messages/", requestOptions);


        if(response.status == 200) {
            RefreshMessages(setMessages);
        }
    }

    return <>
    <div className="messageBox" >
        <div className='messageBody' onMouseLeave={() => setVisibility("hidden")} onMouseEnter={() => setVisibility("visible")}>
            <p>{messageBody}</p>
            <button style={{visibility: visibility}} className="deleteButton" onClick={deleteMessage}>Delete message</button>
        </div>
        <div className='username'>
            <p>sent by: <b>{username}</b></p>
        </div>
    </div>
    </>
}