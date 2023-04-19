import './Message.css';
import { useState } from 'react';
import { RefreshMessages } from './RefreshMessages';
import { UpdateMessageForm } from './UpdateMessageForm';

/**
 * Component that displays the message body and author
 * @prop messageId: The unique id of the message
 * @prop messageBody: The message body
 * @prop username: user who sent the message
 * @prop setMessages: Method to set the state of messages
 */
export function Message({messageId, messageBody, username, setMessages}) {
    const [visibility, setVisibility] = useState("hidden");
    const [renderUpdateForm, setRenderUpdateForm] = useState(false);
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

    const editMessage = async () => {
        setRenderUpdateForm(true);
    }

    return <>
    <div className="messageBox" >
        <div className='messageBody' onMouseLeave={() => setVisibility("hidden")} onMouseEnter={() => setVisibility("visible")}>
            <p>{messageBody}</p>
            {renderUpdateForm && <UpdateMessageForm setRenderUpdateForm={setRenderUpdateForm} setMessages={setMessages} messageId={messageId} oldMessage={messageBody} username={username}/>}
            <button style={{visibility: visibility}} className="messageButton" onClick={editMessage}>Edit message</button>
            <button style={{visibility: visibility}} className="messageButton" onClick={deleteMessage}>Delete message</button>
        </div>
        <div className='username'>
            <p>sent by: <b>{username}</b></p>
        </div>
    </div>
    </>
}