import { useEffect } from "react"

import Bootsplash from "react-native-bootsplash"

import SplashScreen from "@screens/Splash"
import { getStorage } from "@storage"
import { setAppState } from "src/state/app"
import { useAppDispatch, useAppSelector } from "src/state/store"

import AuthNavigator from "./AuthNavigator"
import MainNavigator from "./MainNavigator"

const enableNativeSplashScreen = false

const AppNavigation = () => {
  const appState = useAppSelector((state) => state.app.currentState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // MAYBE-DO: You can add toast or snackbar notify user if their session has ended or error occured
    const checkLoginStatus = async () => {
      try {
        setTimeout(() => {
          // TODO: change getStorage to secureStorage or whatever which you need to validate main/auth
          const token = getStorage("token")
          dispatch(setAppState(token ? "main" : "auth"))
          hideSplashScreen()
        }, 2000)
      } catch (error) {
        hideSplashScreen()
        dispatch(setAppState("auth"))
        console.error("Error checking login status:", error)
      }
    }
    if (!enableNativeSplashScreen) {
      Bootsplash.hide()
    }
    checkLoginStatus()
  }, [dispatch])

  if (appState === "main") {
    return <MainNavigator />
  }

  if (appState === "auth") {
    return <AuthNavigator />
  }

  return <SplashScreen />
}

export default AppNavigation

/**
 * Hide splash screen if enableNativeSplashScreen is true
 */
const hideSplashScreen = () => {
  if (enableNativeSplashScreen) {
    Bootsplash.hide()
  }
}
