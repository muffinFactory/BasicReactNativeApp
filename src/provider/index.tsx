import React, { ReactNode } from "react"

import { SafeAreaProvider } from "react-native-safe-area-context"

import KeyboardControllerProvider from "./KeyboardControllerProvider"
import NavigationProvider from "./NavigationProvider"
import QueryClientProvider from "./QueryClientProvider"
import ReduxProvider from "./ReduxProvider"
import AppThemeProvider from "./ThemeProvider"

type AppProviderProps = {
  children: ReactNode // AppStack
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <SafeAreaProvider>
    <ReduxProvider>
      <AppThemeProvider>
        <QueryClientProvider>
          <KeyboardControllerProvider>
            <NavigationProvider>
              {/*  */}
              {children}
            </NavigationProvider>
          </KeyboardControllerProvider>
        </QueryClientProvider>
      </AppThemeProvider>
    </ReduxProvider>
  </SafeAreaProvider>
)

export default AppProvider
