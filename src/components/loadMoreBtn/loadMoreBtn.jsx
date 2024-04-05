export const LoadMoreBtn = ({ HandleClick }) => {
  return (
    <div className="conteiner-load-more-btn">
      <button onClick={HandleClick} type="button" className="load-more-btn">
        Load more
      </button>
    </div>
  );
};
