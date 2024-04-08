import Modal from "react-modal";

export const ImageModal = ({ isOpen, onRequestClose, image }) => {
  console.log(image);
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        {image && <img src={image.urls.regular} alt={image.alt_description} />}
      </Modal>
    </>
  );
};
