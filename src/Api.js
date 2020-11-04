import * as Constants from "./Constants";

export const fetchData = async () => {
  return fetch(Constants.GRAPHQL_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: Constants.GET_IMAGES_QUERY }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data);
    });
};
