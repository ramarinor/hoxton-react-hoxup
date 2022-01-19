import ConversationMessages from "./ConversationMessages";
import MessageBox from "./MessageBox";

function ConversationMain() {
  return (
    <main className="conversation">
      {/* <!-- Chat header --> */}
      <header className="panel"></header>

      {/* <!-- 

      The Messages List will go here. Check main-messages-list.html
     --> */}
      <ConversationMessages />

      {/* <!-- Message Box --> */}
      <MessageBox />
    </main>
  );
}
export default ConversationMain;
