import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://take-home-test-gql.herokuapp.com/query",
  // cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query {
        works {
          filename
          imageWidth
          imageHeight
          urls {
            type
            link
          }
          exif {
            model
            software
            isoSpeedRatings
            dateTime
            make
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App key={8} />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
