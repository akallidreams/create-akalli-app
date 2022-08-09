import { Main } from "../";
import { render, screen } from "@testing-library/react-native/pure";
import { store } from "@config/store";
import { Provider } from "react-redux";
import "@testing-library/jest-native/extend-expect";
import React, { ReactNode } from "react";

jest.mock("redux-persist", () => {
  const real = jest.requireActual("redux-persist");
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

const ReduxWrapper = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

describe("should test Main Screen", () => {
  beforeEach(() => {
    render(
      <ReduxWrapper>
        <Main />
      </ReduxWrapper>
    );
  }),
    it("renders without crashing", () => {
      expect(screen).toBeTruthy();
    });
  it("should render the title value", () => {
    const { queryByTestId } = render(
      <ReduxWrapper>
        <Main />
      </ReduxWrapper>
    );
    expect(queryByTestId("dti-title")).toHaveTextContent("Logged in");
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
