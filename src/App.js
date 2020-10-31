import React, { useEffect, useState } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const getCamera = gql`
  {
    works {
      filename
      imageWidth
      urls {
        link
      }
      exif {
        make
        model
      }
    }
  }
`;

function App() {
  return (
    <Query query={getCamera}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>There seems to be an error...</p>;
        return (
          <div className="container">
            <h1>Camera</h1>
            <div className="row">
              {data.works.map((camera, i) => (
                <div key={i}>
                  {!!camera.exif.model ? (
                    <h3 className="d-none">{`${camera.exif.make} - ${camera.exif.model}`}</h3>
                  ) : (
                    <h3>Unkown model</h3>
                  )}
                  <img
                    src={camera.urls[0].link}
                    className="card-img-top"
                    style={{ height: "10em" }}
                    alt={`${camera.exif.make} - ${camera.exif.model}`}
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
