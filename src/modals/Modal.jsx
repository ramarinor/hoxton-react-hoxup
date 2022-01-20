import CreateUserModal from "./CreateUserModal";

function Modal({ modal, setModal }) {
  switch (modal) {
    case "newUser":
      return <CreateUserModal setModal={setModal} />;
    case "settings":
      return <p>Settings</p>;
    case "newChat":
      return <p>new Chat</p>;
    default:
      return null;
  }
}

export default Modal;
