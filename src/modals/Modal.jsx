import CreateUserModal from "./CreateUserModal";
import SettingsModal from "./SettingsModal";
import StartNewChatModal from "./StartNewChatModal";

function Modal({
  modal,
  setModal,
  logout,
  users,
  setUsers,
  usersIHaveNotTalkedToYet,
  currentUser,
  conversations,
  setConversations
}) {
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
      return (
        <StartNewChatModal
          setModal={setModal}
          usersIHaveNotTalkedToYet={usersIHaveNotTalkedToYet}
          currentUser={currentUser}
          conversations={conversations}
          setConversations={setConversations}
        />
      );
    default:
      return null;
  }
}

export default Modal;
