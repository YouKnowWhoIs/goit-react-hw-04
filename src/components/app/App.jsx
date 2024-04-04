import { useEffect, useState } from "react";
import "./App.css";

import { fetchImages } from "../api/api.js";
import { ImageGellary } from "../imageGellary/imageGellary.jsx";
import { SearchBar } from "../searchBar/searchBar.jsx";
// import { Loading } from "../loader/loader.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  {
    loading && <p>Loading, please waite...</p>;
  }

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const resData = await fetchImages();
        console.log(resData);
        setImages(resData);
      } catch (error) {
        console.log(error);
        setLoading(true);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <>
      <div>
        <SearchBar />
        <ImageGellary images={images} />
      </div>
    </>
  );
}

export default App;
