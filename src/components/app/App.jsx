import { useState } from "react";
import "./App.css";

import { fetchImages } from "../api/api.js";
import { ImageGellary } from "../imageGellary/imageGellary.jsx";
import { SearchBar } from "../searchBar/searchBar.jsx";
import { Loading } from "../loader/loader.jsx";
import { Error } from "../errorMessahe/errorMesage.jsx";
import { LoadMoreBtn } from "../loadMoreBtn/loadMoreBtn.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const load = async (searchInput) => {
    try {
      setImages([]);
      setLoading(true);
      setSearchInput(searchInput);
      const resData = await fetchImages(searchInput);
      // console.log(resData);
      setImages(resData);
      // setLoadMoreBtn(true);
      onSearchSuccess(resData.length > 0);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const HandleLoadMore = async () => {
    try {
      setLoading(true);
      const nextPage = Math.ceil(images.length / 5) + 1;
      const resData = await fetchImages(searchInput, nextPage);
      // console.log(resData);
      setImages([...images, ...resData]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onSearchSuccess = (hasResults) => {
    setLoadMoreBtn(hasResults);
  };

  return (
    <>
      <div>
        <SearchBar onSearch={load} onSearchSuccess={onSearchSuccess} />
        {loading && <Loading />}
        {isError && <Error />}
        <ImageGellary images={images} />
        {loadMoreBtn && load.lenght > 0 && (
          <LoadMoreBtn HandleLoadMore={HandleLoadMore} />
        )}
      </div>
    </>
  );
}

export default App;
