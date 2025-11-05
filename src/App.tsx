import MainNavigator from "./navigation/MainNavigator"
import AppProvider from "./provider"

const App = () => (
  <AppProvider>
    <MainNavigator />
  </AppProvider>
)

export default App
