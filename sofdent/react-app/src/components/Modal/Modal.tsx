type ModalProps = {
  show: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

function Modal({ show, title, onClose, children, footer }: ModalProps) {
  if (!show) return null;

  return (
    <div
      className="modal d-block"
      tabIndex={-1}
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          {title && (
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" onClick={onClose} />
            </div>
          )}
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            {footer ?? (
              <button className="btn btn-secondary" onClick={onClose}>
                Cerrar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
