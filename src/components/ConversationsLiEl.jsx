import { useNavigate } from "react-router-dom";

function ConversationsLiEl({ currentUser, users, conversation }) {
  const navigate = useNavigate();
  const user = users.find(
    (user) =>
      (user.id === conversation.userId ||
        user.id === conversation.participantId) &&
      user.id !== currentUser.id
  );

  return (
    <li>
      <button
        className="chat-button"
        onClick={() => {
          navigate(`/logged-in/${conversation.id}`);
        }}
      >
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
            {conversation.messages.length > 0
              ? conversation.messages[conversation.messages.length - 1]
                  .messageText
              : "No messages yet"}
          </p>
        </div>
      </button>
    </li>
  );
}
export default ConversationsLiEl;
