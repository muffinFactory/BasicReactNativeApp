export type AppState = "loading" | "auth" | "main"

export interface AppSliceState {
  currentState: AppState
}
