import React, { useEffect, useState } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Photographs from "./components/Photographs";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const getPhotoData = gql`
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
    <Query query={getPhotoData}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>There seems to be an error...</p>;
        return <Photographs getPhotoData={data} />;
      }}
    </Query>
  );
}

export default App;
