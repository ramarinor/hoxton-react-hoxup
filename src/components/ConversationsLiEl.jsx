import { useEffect, useState } from "react";

function ConversationsLiEl({ currentUser, users, conversation }) {
  const user = users.find(
    (user) =>
      (user.id === conversation.userId ||
        user.id === conversation.participantId) &&
      user.id !== currentUser.id
  );
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    console.log(conversation.id);
    fetch(`http://localhost:4000/messages?conversationId=${conversation.id}`)
      .then((resp) => resp.json())
      .then((messagesFromServer) => setMessages(messagesFromServer));
  }, []);
  return (
    <li>
      <button className="chat-button">
        <img
          className="avatar"
          height="50"
          width="50"
          alt=""
          src="https://robohash.org/2"
        />
        <div>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <p>
            {messages.length > 0
              ? messages[messages.length - 1].messageText
              : "No messages yet"}
          </p>
        </div>
      </button>
    </li>
  );
}
export default ConversationsLiEl;
