import { AkState } from '@akalli/state'
import { authReducer } from 'src/features/auth/services/slices'
import { historySlice } from 'src/features/main/redux'

export const { clearStore, store, useAppDispatch, persistor } =
  AkState.reduxInit({
    auth: authReducer,
    history: historySlice,
  })
