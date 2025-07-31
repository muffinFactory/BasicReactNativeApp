import { AppRegistry, LogBox } from "react-native"
import App from "./src/App"
import { name as appName } from "./app.json"

if (process.env.NODE_ENV === "test") {
  LogBox.ignoreAllLogs() // suppress all logs in tests
} else {
  LogBox.ignoreLogs(["Require cycle:"]) // suppress require-cycle warnings, it's fine
}

AppRegistry.registerComponent(appName, () => App)
