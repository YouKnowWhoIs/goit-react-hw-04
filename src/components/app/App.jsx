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

  const load = async (searchInput) => {
    try {
      setImages([]);
      setLoading(true);
      const resData = await fetchImages(searchInput);
      console.log(resData);
      setImages(resData);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const HandleClick = () => {
    console.log("work");
  };

  return (
    <>
      <div>
        <SearchBar onSearch={load} />
        {loading && <Loading />}
        {isError && <Error />}
        <ImageGellary images={images} />
        <LoadMoreBtn HandleClick={HandleClick} />
      </div>
    </>
  );
}

export default App;
