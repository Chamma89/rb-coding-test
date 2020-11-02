import { render, screen } from "@testing-library/react";
import App from "./App";
import { shallow, mount } from "enzyme";

// mount not working with React v17.0.1

describe("Testing", () => {
  let wrapper;

  beforeAll(() => {
    global.fetch = jest.fn();
    //window.fetch = jest.fn(); if running browser environment
  });

  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true });
  });

  test("renders learn react link", () => {
    expect(wrapper.find("h1").text()).toContain("RB Cameras");
  });

  // test("render a button", () => {
  //   expect(wrapper.find("input").text()).toBe("test");
  // });

  test("value of state", () => {
    // expect(wrapper.find("#counter-value").text()).toBe(0);
  });
});
