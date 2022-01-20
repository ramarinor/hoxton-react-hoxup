import CloseModalButton from "../components/CloseModalButton";

function CreateUserModal({ setModal }) {
  return (
    <div className="modal-wrapper">
      <form className="modal">
        <CloseModalButton setModal={setModal} />
        <h2 className="modal-title">Enter your details</h2>
        <label htmlFor="firstName">
          <h3>First name</h3>
        </label>
        <input required type="text" name="firstName" id="firstName" />

        <label htmlFor="lastName">
          <h3>Last name</h3>
        </label>
        <input required type="text" name="lastName" id="lastName" />

        <label htmlFor="phoneNumber">
          <h3>Phone number</h3>
        </label>
        <input required type="text" name="phoneNumber" id="phoneNumber" />

        <button className="create-user">CREATE USER</button>
      </form>
    </div>
  );
}

export default CreateUserModal;
