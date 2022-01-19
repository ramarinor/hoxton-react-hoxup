import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import ConversationMain from "../components/ConversationMain";
import SidePanel from "../components/SidePanel";

function Main({ currentUser, users }) {
  const params = useParams();
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    if (currentUser === null) {
      navigate("/login");
    } else {
      fetch(`http://localhost:4000/conversations?userId=${currentUser.id}`)
        .then((resp) => resp.json())
        .then((conversationsFromServer) =>
          setConversations(conversationsFromServer)
        );
    }
  }, []);

  if (currentUser === null) return null;
  return (
    <div className="main-wrapper">
      {/* <!-- Side Panel --> */}
      <SidePanel
        currentUser={currentUser}
        users={users}
        conversations={conversations}
      />

      {/* <!-- Main Chat Section --> */}
      {params.conversationId ? (
        <ConversationMain
          conversationId={params.conversationId}
          currentUser={currentUser}
        />
      ) : null}
    </div>
  );
}
export default Main;
