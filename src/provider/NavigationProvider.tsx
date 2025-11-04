import React, { createContext, ReactNode } from "react"

import { NavigationContainer as NavContainer, useNavigation } from "@react-navigation/native"

import { MainNavigatorStack, MainStackNavigation } from "@lib/routes/type"

type PossibleScreen = keyof MainNavigatorStack

interface NavigationContextType {
  navigate?: (target: PossibleScreen, params?: object) => void
  onClickSupport?: () => void
  resetToMainNavigator?: () => void
}

const NavigationContext = createContext<NavigationContextType>({})

const RouteContainer: React.FC<NavigationProviderProps> = ({ children }) => {
  const navigation = useNavigation<MainStackNavigation>()
  const navigate = (target: PossibleScreen, params?: any) => {
    navigation.navigate(target, params)
  }

  // TODO: handle notification handler here

  return <NavigationContext.Provider value={{ navigate }}>{children}</NavigationContext.Provider>
}

type NavigationProviderProps = {
  children: ReactNode
}

const NavigationContainer: React.FC<NavigationProviderProps> = ({ children }) => {
  return (
    <NavContainer>
      <RouteContainer>{children}</RouteContainer>
    </NavContainer>
  )
}

export default NavigationContainer
