// import "react-native-gesture-handler";
import { Router } from "@akalli/navigation";
import { AkalliProvider } from "@config/AkalliProvider";
import { routerConfig } from "@config/routerConfig";

const App = () => {
  return (
    <AkalliProvider>
      <Router config={routerConfig} />
    </AkalliProvider>
  );
};

export default App;
