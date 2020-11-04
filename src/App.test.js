// import PhotoData from "./__mocks__/Api";
import * as Constants from "./Constants";
import axios from "axios";
import { render, cleanup } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import App from "./App";
import { get } from "enzyme/build/configuration";
import { fetchData } from "./Api";

afterEach(cleanup);
jest.mock("axios");

const mocks = [
  {
    request: {
      query: Constants.GET_IMAGES_QUERY,
    },
    result: {
      works: Constants.EXPECTED_RETURNED_JSON,
    },
  },
];

describe("fetchData", () => {
  it("fetches data from an API", async () => {
    const { getByText } = render(
      <MockedProvider>
        <App />
      </MockedProvider>
    );
    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it("fetches successfully data from an API", async () => {});
});
