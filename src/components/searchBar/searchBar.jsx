export const SearchBar = () => {
  return (
    <header>
      <form className="searchBar-conteiner">
        <input
          className="searchBar-search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className="searchBar-button" type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
