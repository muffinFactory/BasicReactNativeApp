import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// This is placeholder slice example, (Theming is managed by context provider)
// We should expand with other app related settings later for example language settings etc

export interface SettingsState {
  theme: "light" | "dark"
}

const initialState: SettingsState = {
  theme: "light"
}

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload
    }
  }
})

export const { setTheme } = settingsSlice.actions
export const selectTheme = (state: { settings: SettingsState }) => state.settings.theme
const settingsReducer = settingsSlice.reducer

export default settingsReducer
