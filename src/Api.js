import axios from "axios";
import * as Constants from "./Constants";

export const fetchData = async () => {
  const queryResult = axios.post(Constants.GRAPHQL_API, {
    query: Constants.GET_IMAGES_QUERY,
  });
  return await queryResult.data.data.works;
};

fetchData("react");
