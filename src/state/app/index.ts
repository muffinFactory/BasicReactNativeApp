import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { AppSliceState, AppState } from "./types"

const initialState: AppSliceState = {
  currentState: "loading"
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<AppState>) => {
      state.currentState = action.payload
    }
  }
})

export default appSlice.reducer
export const { setAppState } = appSlice.actions
export const selectAppState = (state: { app: AppSliceState }) => state.app.currentState
