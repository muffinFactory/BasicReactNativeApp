import { createContext, ReactNode, useState } from "react"
import { StatusBar, useColorScheme } from "react-native"

import { LightAppTheme } from "@ui/theme"
import { ColorScheme } from "@ui/Theme/type"

type AppThemeType = "light" | "dark"

const availableAppThemes: Record<AppThemeType, ColorScheme> = {
  light: LightAppTheme,
  // Later-Do: different theme later?
  dark: LightAppTheme
}

type ThemeContextType = {
  theme: ColorScheme
  setThemeName: (name: AppThemeType) => void
  themeName: string
}

export const AppThemeContext = createContext<ThemeContextType | undefined>(undefined)

const AppThemeProvider = ({ children, initialTheme }: { children: ReactNode; initialTheme?: AppThemeType }) => {
  const colorScheme = useColorScheme()
  const [themeName, setThemeName] = useState<AppThemeType>(() => initialTheme || colorScheme || "dark")
  const theme = availableAppThemes[themeName] || availableAppThemes.light

  // TODO Storage check initialization

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
