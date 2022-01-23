import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import ConversationMain from "../components/ConversationMain";
import SidePanel from "../components/SidePanel";

function Main({
  currentUser,
  users,
  setModal,
  setConversations,
  conversations
}) {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser === null) {
      navigate("/login");
    } else {
      fetch("http://localhost:4000/conversations?_embed=messages")
        .then((resp) => resp.json())
        .then((conversationsFromServer) =>
          setConversations(
            conversationsFromServer.filter(
              (conversation) =>
                conversation.userId === currentUser.id ||
                conversation.participantId === currentUser.id
            )
          )
        );
    }
  }, [currentUser]);

  if (currentUser === null) return null;
  return (
    <div className="main-wrapper">
      {/* <!-- Side Panel --> */}
      <SidePanel
        currentUser={currentUser}
        users={users}
        conversations={conversations}
        setModal={setModal}
      />

      {/* <!-- Main Chat Section --> */}
      {params.conversationId ? (
        <ConversationMain
          conversationId={Number(params.conversationId)}
          currentUser={currentUser}
          conversations={conversations}
          setConversations={setConversations}
        />
      ) : null}
    </div>
  );
}
export default Main;
