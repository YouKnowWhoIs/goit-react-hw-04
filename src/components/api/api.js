import axios from "axios";

const fetchImages = async () => {
  const apiKey = "soIIhOVxblDhlozBu-t3ph783hav1g27jQlrq9LvcmI";
  const url = `https://api.unsplash.com/photos?client_id=${apiKey}`;

  const respons = await axios.get(url);

  // console.log(respons.data);

  return respons.data;
};

export { fetchImages };
