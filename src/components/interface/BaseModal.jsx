export const BaseModal = ({ children, handleOpen }) => {
  return (
    <div className="modal-container">
      <div className="modal-backdrop" onClick={() => handleOpen(false)}></div>
      <dialog className="modal-dialog" open={true}>
        <button className="modal-dialog-btn" onClick={() => handleOpen(false)}>
          X
        </button>
        {children}
      </dialog>
    </div>
  );
};
