import { useState } from "react";
import ConversationMessages from "./ConversationMessages";
import MessageBox from "./MessageBox";

function ConversationMain({
  conversationId,
  currentUser,
  conversations,
  setConversations
}) {
  const [messages, setMessages] = useState([]);

  return (
    <main className="conversation">
      {/* <!-- Chat header --> */}
      <header className="panel"></header>

      {/* <!-- 

      The Messages List will go here. Check main-messages-list.html
     --> */}
      <ConversationMessages
        conversationId={conversationId}
        currentUser={currentUser}
        messages={messages}
        setMessages={setMessages}
      />

      {/* <!-- Message Box --> */}
      <MessageBox
        messages={messages}
        setMessages={setMessages}
        currentUser={currentUser}
        conversationId={conversationId}
        conversations={conversations}
        setConversations={setConversations}
      />
    </main>
  );
}
export default ConversationMain;
