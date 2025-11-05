import { createContext, ReactNode, useState } from "react"
import { StatusBar } from "react-native"

import { AppTheme } from "@ui/theme"
import { ColorScheme } from "@ui/Theme/type"

const availableAppThemes: Record<string, ColorScheme> = {
  light: AppTheme,
  // Later-Do: different theme later
  dark: AppTheme
}

type ThemeContextType = {
  theme: ColorScheme
  setThemeName: (name: string) => void
  themeName: string
}

export const AppThemeContext = createContext<ThemeContextType | undefined>(undefined)

const AppThemeProvider = ({ children, initialTheme = "light" }: { children: ReactNode; initialTheme?: string }) => {
  const [themeName, setThemeName] = useState(initialTheme)

  const theme = availableAppThemes[themeName] || availableAppThemes.light

  return (
    <AppThemeContext.Provider value={{ theme, setThemeName, themeName }}>
      <StatusBar
        barStyle={themeName === "light" ? "dark-content" : "light-content"} // match text/icons
      />
      {children}
    </AppThemeContext.Provider>
  )
}

export default AppThemeProvider
