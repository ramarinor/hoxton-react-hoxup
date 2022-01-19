import { useNavigate } from "react-router-dom";
import ConversationMain from "../components/ConversationMain";
import SidePanel from "../components/SidePanel";

function Main({ currentUser }) {
  const navigate = useNavigate();
  if (currentUser === null) navigate("/login");
  return (
    <div className="main-wrapper">
      {/* <!-- Side Panel --> */}
      <SidePanel />

      {/* <!-- Main Chat Section --> */}
      <ConversationMain />
    </div>
  );
}
export default Main;
