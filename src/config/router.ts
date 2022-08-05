import { AkNavTypes } from "@akalli/navigation";
import * as screens from "../features";

export const routerConfig: AkNavTypes.IRouterProps = {
  authInitial: "SignIn",
  appInitial: "Main",
  activeStack: "app",
  env: "dev",
  screens,
};

// drawer: {
//   position: "left",
//   bg: theme.colors.primary || "black",
//   labelColor: theme.colors.white || "black",
// },
