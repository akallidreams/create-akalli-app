import { AkState } from "@akalli/state";
import { authSlice } from "../features/auth/helpers/redux";

export const { clearStore, store, useAppDispatch, persistor } =
  AkState.reduxInit({
    auth: authSlice.reducer,
  });
