/**
 * Refreshes messages shown in chat box
 * @param {*} setMessages Method to set state of messages
 */
export async function RefreshMessages(setMessages) {
    const response = await fetch("http://localhost:1339/messages/", {method: "GET"});
    const result = await response.json();
    setMessages(result);
}