import { useEffect, useState } from "react";
import ConversationMessage from "./ConversationMessage";

function ConversationMessages({ conversationId, currentUser }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/messages?conversationId=${conversationId}`)
      .then((resp) => resp.json())
      .then((messagesFromServer) => setMessages(messagesFromServer));
  }, [conversationId]);
  return (
    <ul className="conversation__messages">
      {messages.map((message) => (
        <ConversationMessage
          key={message.id}
          conversationId={conversationId}
          currentUser={currentUser}
          message={message}
        />
      ))}
    </ul>
  );
}
export default ConversationMessages;
