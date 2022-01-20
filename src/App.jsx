import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Modal from "./modals/Modal";
import Login from "./pages/Login";
import Main from "./pages/Main";

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [modal, setModal] = useState("i like bananas");
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then((usersFromServer) => setUsers(usersFromServer));
  }, []);

  function logout() {
    setCurrentUser(null);
    setModal("i like banans");
  }
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to="/login" />} />
        <Route
          path="/login"
          element={
            <Login
              users={users}
              setModal={setModal}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/logged-in"
          element={
            <Main
              currentUser={currentUser}
              users={users}
              setModal={setModal}
              setConversations={setConversations}
              conversations={conversations}
            />
          }
        />
        <Route
          path="/logged-in/:conversationId"
          element={
            <Main
              currentUser={currentUser}
              users={users}
              setModal={setModal}
              setConversations={setConversations}
              conversations={conversations}
            />
          }
        />
      </Routes>
      <Modal modal={modal} setModal={setModal} logout={logout} />
    </div>
  );
}
