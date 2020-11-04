import React, { useEffect, useState } from "react";
import PhotosList from "./components/PhotosList";
import axios from "axios";
import * as Constants from "./Constants";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [fetchingData, setFetchingData] = useState(true);
  const [imagesData, setImagesData] = useState({ works: [] });
  const [noResultsFound, setNoResultsFound] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const queryResult = await axios.post(Constants.GRAPHQL_API, {
        query: Constants.GET_IMAGES_QUERY,
      });

      const result = queryResult.data.data;
      console.log(result);
      setImagesData({ works: result.works });
      setFetchingData(false);

      result.works.map((item) => {
        if (item.exif.model === "") {
          item.exif.model = "Unknown model";
        }

        if (item.exif.make === "") {
          item.exif.make = "Unknown make";
        }
      });
      setImagesData({ works: result.works });
    };
    fetchData();
  }, [fetchingData]);

  useEffect(() => {
    const results = imagesData.works.filter(
      (image) =>
        image.exif.model
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase()) ||
        image.exif.make.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    if (!fetchingData) {
      results.length == 0
        ? setNoResultsFound("No results found")
        : setNoResultsFound("");
    }

    setSearchResults(results);
  }, [searchTerm, imagesData]);

  return (
    <div className="container">
      <h1 className="text-center mb-5" aria-label="RB Cameras">
        RB Cameras
      </h1>
      <input
        autoFocus
        type="text"
        placeholder="Search"
        className="mb-5 w-100 p-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
      {fetchingData ? (
        <p className="loading">Loading...</p>
      ) : (
        <PhotosList photos={searchResults} />
      )}
      <h3>{noResultsFound}</h3>
    </div>
  );
}

export default App;
