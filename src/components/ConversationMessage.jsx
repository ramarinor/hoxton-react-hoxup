function ConversationMessage({ message, conversationId, currentUser }) {
  return (
    <li className={message.userId === currentUser.id ? "outgoing" : null}>
      <p>{message.messageText}</p>
    </li>
  );
}

export default ConversationMessage;
