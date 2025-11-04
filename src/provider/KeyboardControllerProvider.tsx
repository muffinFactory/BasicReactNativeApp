import React from "react"

import { KeyboardProvider } from "react-native-keyboard-controller"

type KeyboardControllerProviderProps = {
  children: React.ReactNode
}

export const KeyboardControllerProvider = ({ children }: KeyboardControllerProviderProps) => {
  return <KeyboardProvider>{children}</KeyboardProvider>
}
