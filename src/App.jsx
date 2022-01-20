import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Modal from "./modals/Modal";
import Login from "./pages/Login";
import Main from "./pages/Main";

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [modal, setModal] = useState("newUser");
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then((usersFromServer) => setUsers(usersFromServer));
  }, []);
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
            <Main currentUser={currentUser} users={users} setModal={setModal} />
          }
        />
        <Route
          path="/logged-in/:conversationId"
          element={
            <Main currentUser={currentUser} users={users} setModal={setModal} />
          }
        />
      </Routes>
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
}
