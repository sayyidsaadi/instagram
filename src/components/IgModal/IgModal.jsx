import "./IgModal.scss";
const IgModal = ({ children, hide }) => {
  return (
    <>
      <div className="modal-blur">
        <div className="modal-close-btn">
          <button onClick={() => hide(false)}>
            <i class="bx bx-x"></i>
          </button>
        </div>
        <div className="modal-wraper">
          <div className="modal-main">{children}</div>
        </div>
      </div>
    </>
  );
};

export default IgModal;
