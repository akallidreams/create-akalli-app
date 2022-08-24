import { Main } from "../";
import { render, screen, act } from "@testing-library/react-native/pure";
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
    // FIXME: fix this workaround
    const RenderScreen = async () =>
      await act(async () => {
        return render(
          <AkalliProvider>
            <Main />
          </AkalliProvider>
        );
      });

    return RenderScreen();
  });

  it("renders without crashing", () => {
    expect(screen).toBeTruthy();
  });
  it("should render the title value", () => {
    expect(screen.queryByTestId("dti-conditional-text")).toHaveTextContent(
      "I am shown because we are speaking in english"
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
