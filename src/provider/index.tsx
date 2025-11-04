import React, { ReactNode } from "react"

import { KeyboardControllerProvider } from "./KeyboardControllerProvider"
import NavigationProvider from "./NavigationProvider"
import QueryClientProvider from "./QueryClientProvider"
import SafeAreaProvider from "./SafeAreaProvider"
import { AppThemeProvider } from "./ThemeProvider"

type AppProviderProps = {
  children: ReactNode // AppStack
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <AppThemeProvider>
    <QueryClientProvider>
      <SafeAreaProvider>
        <KeyboardControllerProvider>
          <NavigationProvider>{children}</NavigationProvider>
        </KeyboardControllerProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  </AppThemeProvider>
)

export default AppProvider
