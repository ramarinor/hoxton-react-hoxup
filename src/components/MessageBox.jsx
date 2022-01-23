function MessageBox({
  messages,
  setMessages,
  currentUser,
  conversationId,
  conversations,
  setConversations
}) {
  function createMessage(e) {
    e.preventDefault();
    const formEl = e.target;
    const newMessageData = {
      userId: currentUser.id,
      messageText: formEl.text.value,
      conversationId: conversationId
    };
    fetch("http://localhost:4000/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMessageData)
    })
      .then((resp) => resp.json())
      .then((message) => {
        const updatedMessages = [...messages, message];
        setMessages(updatedMessages);
        const updatedConversations = JSON.parse(JSON.stringify(conversations));
        const conversationToUpdate = updatedConversations.find(
          (conversation) => conversation.id === conversationId
        );
        conversationToUpdate.messages.push(message);
        setConversations(updatedConversations);
        formEl.reset();
      });
  }
  return (
    <footer>
      <form
        className="panel conversation__message-box"
        onSubmit={createMessage}
      >
        <input type="text" placeholder="Type a message" name="text" required />
        <button type="submit">
          {/* <!-- This is the send button --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="currentColor"
              d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
            ></path>
          </svg>
        </button>
      </form>
    </footer>
  );
}
export default MessageBox;
