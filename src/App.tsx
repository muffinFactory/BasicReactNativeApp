import AppNavigation from "./navigation"
import AppProvider from "./provider"

const App = () => {
  return (
    <AppProvider>
      <AppNavigation />
    </AppProvider>
  )
}

export default App
