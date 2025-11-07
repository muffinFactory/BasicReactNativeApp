import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { TypedUseSelectorHook, useSelector } from "react-redux"

import appReducer from "./app"
import settingsReducer from "./settings"

export const store = configureStore({
  reducer: {
    app: appReducer,
    appSettings: settingsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
