import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import { ImageGellary } from "../imageGellary/imageGellary.jsx";
import { SearchBar } from "../searchBar/searchBar.jsx";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const respons = await axios.get("<https://api.unsplash.com/>");
      console.log(respons);
      setArticles(respons);
    }

    fetchArticles();
  }, []);

  return (
    <>
      <div>
        <SearchBar />
        <ImageGellary articles={articles} />
      </div>
    </>
  );
}

export default App;
