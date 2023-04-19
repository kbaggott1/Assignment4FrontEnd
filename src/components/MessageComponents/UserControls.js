import { SendMessageForm } from "./SendMessageForm";
import { RefreshMessages } from "./RefreshMessages";
import { UpdateMessageForm } from "./UpdateMessageForm";
/**
 * Component that contains controls for the user
 * @prop messages: An array of all messages.
 * @prop setMessages: Setter to set the state of messages.
 */
export function UserControls({messages, setMessages}) {

    return <>
    <div className="userControlDiv">
        <SendMessageForm messages={messages} setMessages={setMessages}/>
        <div className="miscControls">
            <button className="refreshButton" onClick={() => RefreshMessages(setMessages)}>Refresh</button>
        </div>
        
    </div>
    </>
}