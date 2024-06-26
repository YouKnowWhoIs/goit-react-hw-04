import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "fixed",
    overflow: "hidden",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    padding: "0",
  },
};

export const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <>
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        {image && (
          <img
            className="image-modal-image"
            src={image.urls.regular}
            alt={image.alt_description}
          />
        )}
      </Modal>
    </>
  );
};
