import { Provider } from "react-redux"

import { store } from "src/state/store"

type KeyboardControllerProviderProps = {
  children: React.ReactNode
}

const ReduxProvider = ({ children }: KeyboardControllerProviderProps) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
