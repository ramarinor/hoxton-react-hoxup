function ConversationsLiEl({ currentUser, users, conversation }) {
  const user = users.find(
    (user) =>
      (user.id === conversation.userId ||
        user.id === conversation.participantId) &&
      user.id !== currentUser.id
  );
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
          <p>Last Message!</p>
        </div>
      </button>
    </li>
  );
}
export default ConversationsLiEl;
