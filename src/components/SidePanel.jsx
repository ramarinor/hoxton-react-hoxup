import { useState } from "react/cjs/react.development";
import ConversationsLiEl from "./ConversationsLiEl";

function SidePanel({ currentUser, users, conversations, setModal }) {
  const [search, setSearch] = useState("");
  const conversationsToDisplay =
    search === ""
      ? conversations
      : conversations.filter((conversation) =>
          conversation.messages.some((message) =>
            message.messageText.includes(search)
          )
        );
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
        <button
          onClick={() => {
            setModal("settings");
          }}
        >
          <h2>🍌</h2>
        </button>
      </header>

      {/* <!-- Search form --> */}
      <form
        className="aside__search-container"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="search"
          name="messagesSearch"
          placeholder="Search chats"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>

      {/* <!-- 

Side Chat List goes here. Check side-chat-list.html
    
-->
<!--  --> */}

      <ul>
        <li>
          <button
            className="chat-button"
            onClick={() => {
              setModal("newChat");
            }}
          >
            <div>
              <h3>+ Start a new Chat</h3>
            </div>
          </button>
        </li>
        {conversationsToDisplay.map((conversation) => (
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
