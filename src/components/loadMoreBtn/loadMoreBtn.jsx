export const LoadMoreBtn = ({ HandleLoadMore }) => {
  return (
    <div className="conteiner-load-more-btn">
      <button onClick={HandleLoadMore} type="button" className="load-more-btn">
        Load more
      </button>
    </div>
  );
};
