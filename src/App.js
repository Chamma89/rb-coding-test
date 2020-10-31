import React, { useEffect, useState } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import "./App.css";

const getCameraModel = gql`
  {
    works {
      filename
      imageWidth
    }
  }
`;

function App() {
  return (
    <Query query={getCameraModel}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>There seems to be an error...</p>;
        return (
          <div className="container">
            <h1>Camera</h1>
            <div className="row">
              {data.works.map((camera, i) => (
                <div key={i}>
                  <h3>{camera.imageWidth}</h3>
                  <img
                    src={camera.filename}
                    className="card-img-top"
                    style={{ height: "10em" }}
                    alt="camera image"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Query>
  );
}

export default App;
