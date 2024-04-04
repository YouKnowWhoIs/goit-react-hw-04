export const ImageGellary = ({ images }) => {
  return (
    <ul className="image-gallery-conteiner">
      {images.length > 0 ? (
        images.map((image) => (
          <li key={image.id} className="image-galeri-item">
            <img
              src={image.urls.small}
              alt={image.alt_description}
              width="300"
            />
          </li>
        ))
      ) : (
        <p>Empty</p>
      )}
    </ul>
  );
};
