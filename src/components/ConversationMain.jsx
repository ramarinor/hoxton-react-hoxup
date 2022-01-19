import ConversationMessages from "./ConversationMessages";
import MessageBox from "./MessageBox";

function ConversationMain({ conversationId, currentUser }) {
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
      />

      {/* <!-- Message Box --> */}
      <MessageBox />
    </main>
  );
}
export default ConversationMain;
