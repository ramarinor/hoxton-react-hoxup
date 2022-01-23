import CloseModalButton from "../components/CloseModalButton";

function StartNewChatModal({
  setModal,
  usersIHaveNotTalkedToYet,
  currentUser,
  conversations,
  setConversations
}) {
  function createConversation(participantId) {
    fetch("http://localhost:4000/conversations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: currentUser.id,
        participantId: participantId
      })
    })
      .then((resp) => resp.json())
      .then((newConversation) => {
        newConversation.messages = [];
        setConversations([...conversations, newConversation]);
        setModal("i like bananas");
      });
  }
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <CloseModalButton setModal={setModal} />
        <h2>Start new chat</h2>
        {usersIHaveNotTalkedToYet.length > 0 ? (
          <ul>
            {usersIHaveNotTalkedToYet.map((user) => (
              <li key={user.id}>
                <button
                  className="chat-button"
                  onClick={() => {
                    createConversation(user.id);
                  }}
                >
                  <img
                    className="avatar"
                    height="50"
                    width="50"
                    alt=""
                    src={user.avatar}
                  />
                  <div>
                    <h3>
                      {user.firstName} {user.lastName}
                    </h3>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No new person to talk to</p>
        )}
      </div>
    </div>
  );
}
export default StartNewChatModal;
