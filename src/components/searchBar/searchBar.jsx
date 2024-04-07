import { toast, Toaster } from "react-hot-toast";

export const SearchBar = ({ onSearch, onSearchSuccess }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchInput = form.elements.searchInput.value;

    if (searchInput.trim() === "") {
      toast.error("The search field cannot be empty!");
      return;
    }

    if (onSearch) {
      onSearch(searchInput, onSearchSuccess);
    }

    form.reset();
  };

  return (
    <header>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className="searchBar-conteiner">
        <input
          className="searchBar-search"
          type="text"
          name="searchInput"
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
