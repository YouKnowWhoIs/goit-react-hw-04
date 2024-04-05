import { ImageCard } from "../imageCard/ImageCard.jsx";

export const ImageGellary = ({ images }) => {
  return (
    <ul className="image-gallery-conteiner">
      {images.length > 0 &&
        images.map((image) => (
          <li key={image.id} className="image-galeri-item">
            <ImageCard src={image.urls.small} alt={image.alt_description} />
          </li>
        ))}
    </ul>
  );
};
