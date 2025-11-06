import { configureStore } from "@reduxjs/toolkit"

import settingsReducer from "./settings"

export const store = configureStore({
  reducer: {
    appSettings: settingsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
