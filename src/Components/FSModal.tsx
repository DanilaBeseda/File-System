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
    <Modal open={open} onClose={closeHandler}>
      <>{children}</>
    </Modal>
  );
}

export default FSModal;
