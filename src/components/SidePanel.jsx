import ConversationsLiEl from "./ConversationsLiEl";

function SidePanel({ currentUser, users, conversations }) {
  return (
    <aside>
      {/* <!-- Side Header --> */}
      <header className="panel">
        <img
          className="avatar"
          width="50"
          height="50"
          src={currentUser.avatar}
          alt={`${currentUser.firstName} ${currentUser.lastName}`}
        />
        <h3>
          {currentUser.firstName} {currentUser.lastName}
        </h3>
      </header>

      {/* <!-- Search form --> */}
      <form className="aside__search-container">
        <input type="search" name="messagesSearch" placeholder="Search chats" />
      </form>

      {/* <!-- 

Side Chat List goes here. Check side-chat-list.html
    
-->
<!--  --> */}

      <ul>
        <li>
          <button className="chat-button">
            <div>
              <h3>+ Start a new Chat</h3>
            </div>
          </button>
        </li>
        {conversations.map((conversation) => (
          <ConversationsLiEl
            key={conversation.id}
            currentUser={currentUser}
            users={users}
            conversation={conversation}
          />
        ))}
      </ul>
    </aside>
  );
}

export default SidePanel;
