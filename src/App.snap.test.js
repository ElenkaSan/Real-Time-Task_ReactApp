import React from "react";
import renderer from "react-test-renderer";
import { io } from "socket.io-client";
import App from "./App";

jest.mock("socket.io-client", () => {
  return {
    io: () => ({
      on: jest.fn(),
      emit: jest.fn(),
      off: jest.fn(),
    }),
  };
});

it("renders App correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
