import CloseModalButton from "../components/CloseModalButton";

function SettingsModal({ setModal, logout }) {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <CloseModalButton setModal={setModal} />
        <h2>Settings</h2>
        <button className="log-out" onClick={() => logout()}>
          LOG OUT
        </button>
        <button className="delete-account">DELETE ACCOUNT</button>
      </div>
    </div>
  );
}

export default SettingsModal;
