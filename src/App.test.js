import { render, screen } from "@testing-library/react";
import App from "./App";
import { shallow, mount } from "enzyme";

// mount not working with React v17.0.1

describe("Testing", () => {
  let wrapper;

  beforeAll(() => {
    //window.fetch = jest.fn(); if running browser environment
  });

  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true });
  });

  test("Finds h1 tag", () => {
    expect(wrapper.find("h1").text()).toContain("RB Cameras");
  });

  test("calls axios and returns images", () => {
    const images = App("Canon");
    console.log(images);
  });
});
