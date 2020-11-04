import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import App from "./App";
import { fetchData } from "./Api";

beforeAll(() => jest.spyOn(window, "fetch"));

describe("fetchData", () => {
  it("Checks if Loading... is on page", async () => {
    const { getByText } = render(
      <MockedProvider>
        <App />
      </MockedProvider>
    );
    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it("fetches data from an API", async () => {
    await fetchData();
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });
  });

  it("Api status returns 200", async () => {});
});
