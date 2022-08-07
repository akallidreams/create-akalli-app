// import "react-native-gesture-handler";
import { Router } from "@akalli/navigation";
import { AkState } from "@akalli/state";
import { routerConfig } from "@config/router";
import { persistor, store } from "@config/store";
import { theme } from "@config/theme";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <AkState.StateProvider store={store} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Router config={routerConfig} />
      </ThemeProvider>
    </AkState.StateProvider>
  );
};

export default App;
