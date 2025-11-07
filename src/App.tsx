import AppNavigation from "./navigation"
import AppProvider from "./provider"

const App = () => (
  <AppProvider>
    <AppNavigation />
  </AppProvider>
)

export default App
