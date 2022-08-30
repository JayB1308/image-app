import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import { data } from "./data/data";
function App() {
  const [currentImage, setCurrentImage] = useState({
    tag: "Image 1",
    image: data[0].image,
  });
  const [pagination, setPagination] = useState(false);

  return (
    <>
      <Navbar setCurrent={setCurrentImage} setPagination={setPagination} />
      {!pagination ? <Banner image={currentImage.image} /> : ""}
      {pagination ? <Pagination /> : ""}
    </>
  );
}

export default App;
