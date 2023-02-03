import { Modal } from "@mui/material";

type Props = {
  open: boolean;
  closeModal: () => void;
  children: any;
};

function FSModal({ open, closeModal, children }: Props) {
  function closeHandler() {
    closeModal();
  }

  return (
    <Modal
      open={open}
      onClose={closeHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>{children}</>
    </Modal>
  );
}

export default FSModal;
