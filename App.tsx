// import "react-native-gesture-handler";
import { Router } from "@akalli/navigation";
import { routerConfig } from "@config/router";
import { theme } from "@config/theme";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router config={routerConfig} />
    </ThemeProvider>
  );
};

export default App;
