export const ImageGellary = ({ articles }) => {
  return (
    <ul>
      {articles.lenght > 0 ? (
        articles.map((article) => (
          <li key={article.id}>
            <img
              src={article.urls.small}
              alt={article.description}
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
