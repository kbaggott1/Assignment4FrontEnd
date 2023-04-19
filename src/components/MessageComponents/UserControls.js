import { SendMessageForm } from "./SendMessageForm";
import { RefreshMessages } from "./RefreshMessages";
/**
 * Component that contains controls for the user
 * @prop setMessages: Setter to set the state of messages 
 */
export function UserControls({messages, setMessages}) {

    return <>
    <div>
        <SendMessageForm messages={messages} setMessages={setMessages}/>
        <button className="refreshButton" onClick={() => RefreshMessages(setMessages)}>Refresh</button>  
    </div>
    </>
}