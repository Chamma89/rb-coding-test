import React, { useEffect, useState } from "react";
import Photograph from "./components/Photograph";
import axios from "axios";
import * as Constants from "./Constants";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [imagesData, setImagesData] = useState({ works: [] });

  useEffect(() => {
    const fetchData = async () => {
      const queryResult = await axios.post(Constants.GRAPHQL_API, {
        query: Constants.GET_IMAGES_QUERY,
      });
      const result = queryResult.data.data;
      setImagesData({ works: result.works });
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center mb-5">RB Cameras</h1>
      <div className="container">
        <div className="row">
          {imagesData.works.map((item, i) => (
            <Photograph key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
