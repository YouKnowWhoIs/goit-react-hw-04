export const ImageCard = ({ alt, src, handleOpen, image }) => {
  return (
    <div>
      <img
        onClick={() => handleOpen(image)}
        src={src}
        alt={alt}
        width="309"
        height="300"
      />
    </div>
  );
};
