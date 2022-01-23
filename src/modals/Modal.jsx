import CreateUserModal from "./CreateUserModal";
import SettingsModal from "./SettingsModal";

function Modal({ modal, setModal, logout, users, setUsers }) {
  switch (modal) {
    case "newUser":
      return (
        <CreateUserModal
          setModal={setModal}
          users={users}
          setUsers={setUsers}
        />
      );
    case "settings":
      return <SettingsModal setModal={setModal} logout={logout} />;
    case "newChat":
      return <p>new Chat</p>;
    default:
      return null;
  }
}

export default Modal;
