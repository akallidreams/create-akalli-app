import { AkNavTypes } from "@akalli/navigation";
import { mainDict } from "src/features/main";
import * as screens from "../features";

export const routerConfig: AkNavTypes.IRouterProps = {
  authInitialRoute: "SignIn",
  appInitialRoute: "Main",
  activeStack: "app",
  screens,
  dicts: {
    main: mainDict,
  },
  drawer: {
    position: "left",
  },
};
