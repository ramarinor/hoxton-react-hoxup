function CloseModalButton({ setModal }) {
  return (
    <button className="close-modal" onClick={() => setModal("")}>
      x
    </button>
  );
}
export default CloseModalButton;
