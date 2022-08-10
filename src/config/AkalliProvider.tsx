import { AkState } from "@akalli/state";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import { store, persistor } from "./store";
import { theme } from "./theme";

export const AkalliProvider = ({
  children,
  test,
}: {
  children: ReactNode;
  test?: boolean;
}) =>
  test ? (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  ) : (
    <AkState.StateProvider store={store} persistor={persistor}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AkState.StateProvider>
  );
