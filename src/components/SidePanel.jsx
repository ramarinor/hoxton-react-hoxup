function SidePanel({ currentUser }) {
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
              <h3>Tin Man</h3>
              <p>Last message</p>
            </div>
          </button>
        </li>
        <li>
          <button className="chat-button">
            <img
              className="avatar"
              height="50"
              width="50"
              alt=""
              src="https://robohash.org/3"
            />
            <div>
              <h3>Carl T-800</h3>
              <p>Last message</p>
            </div>
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default SidePanel;
