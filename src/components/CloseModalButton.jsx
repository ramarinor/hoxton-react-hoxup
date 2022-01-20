function CloseModalButton({ setModal }) {
  return (
    <button className="close-modal" onClick={() => setModal("i like bananas")}>
      x
    </button>
  );
}
export default CloseModalButton;
