import Modal from "react-modal";

export const ImageModal = ({ isOpen, onRequestClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <p>Work!</p>
      </Modal>
    </>
  );
};
