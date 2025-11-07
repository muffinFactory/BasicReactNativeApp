import { useEffect } from "react"

import { getStorage } from "@storage"
import { setAppState } from "src/state/app"
import { useAppDispatch, useAppSelector } from "src/state/store"

import AuthNavigator from "./AuthNavigator"
import MainNavigator from "./MainNavigator"

const AppNavigation = () => {
  const appState = useAppSelector((state) => state.app.currentState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        setTimeout(() => {
          const token = getStorage("token")
          dispatch(setAppState(token ? "main" : "auth"))

          // Hide Splashscreen
        }, 2000)
      } catch (error) {
        // show error message here
        dispatch(setAppState("auth"))
        console.error("Error checking login status:", error)
      }
    }
    checkLoginStatus()
  }, [dispatch])

  return (
    <>
      {/*  */}
      {appState === "main" ? <MainNavigator /> : appState === "auth" ? <AuthNavigator /> : null}
    </>
  )
}

export default AppNavigation
