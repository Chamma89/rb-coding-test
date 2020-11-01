import React, { useEffect, useState } from "react";
import PhotosList from "./components/PhotosList";
import axios from "axios";
import * as Constants from "./Constants";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [imagesData, setImagesData] = useState({ works: [] });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const axios = require("axios");

    axios({
      url: Constants.GRAPHQL_API,
      method: "post",
      data: {
        query: Constants.GET_IMAGES_QUERY,
      },
    }).then((result) => {
      result.data.data.works.map((item) => {
        if (item.exif.model === "") {
          item.exif.model = "Unknown model";
        }

        if (item.exif.make === "") {
          item.exif.make = "Unknown make";
        }
      });
      setImagesData({ works: result.data.data.works });
    });
  }, []);

  useEffect(() => {
    const results = imagesData.works.filter(
      (image) =>
        image.exif.model
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase()) ||
        image.exif.make.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    setSearchResults(results);
  }, [searchTerm, imagesData]);

  return (
    <div>
      <h1 className="text-center mb-5">RB Cameras</h1>
      <div className="container">
        <input
          autoFocus
          type="text"
          placeholder="Search"
          className="mb-5 w-100 p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
        />
        <PhotosList photos={searchResults} />
      </div>
    </div>
  );
}

export default App;
