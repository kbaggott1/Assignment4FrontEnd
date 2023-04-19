import './ChatBox.css';
import { Message } from './Message';

/**
 * Component that displays messages
 * @prop messages: Array of messages each containing messageId, message, and user
 * @returns JSX Message components
 */
export function ChatBox({messages, setMessages}) {

    
    return <div className="chatBox">
        {messages.length > 0 ? messages.map(message => (
            <Message key={message.messageId} messageId={message.messageId} messageBody={message.message} username={message.user} setMessages={setMessages} />
        )) : <h2>No messages. Try refreshing.</h2>}
    </div>
}