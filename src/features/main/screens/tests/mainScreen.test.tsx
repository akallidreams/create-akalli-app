import { Main } from "../";
import { render, screen } from "@testing-library/react-native/pure";
import "@testing-library/jest-native/extend-expect";
import React from "react";
import { AkalliProvider } from "@config/AkalliProvider";

jest.mock("redux-persist", () => {
  const real = jest.requireActual("redux-persist");
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

describe("should test Main Screen", () => {
  beforeEach(() => {
    render(
      <AkalliProvider test>
        <Main />
      </AkalliProvider>
    );
  }),
    it("renders without crashing", () => {
      expect(screen).toBeTruthy();
    });
  it("should render the title value", () => {
    expect(screen.queryByTestId("dti-title")).toHaveTextContent("Logged in");
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
