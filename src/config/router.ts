import { AkNavTypes } from "@akalli/navigation";
import * as screens from "../features";

export const routerConfig: AkNavTypes.IRouterProps = {
  authInitial: "SignIn",
  appInitial: "Main",
  activeStack: "app",
  screens,
};
