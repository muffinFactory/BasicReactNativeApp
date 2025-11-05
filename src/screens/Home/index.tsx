import { Text } from "react-native"

import { BaseScreen } from "@components/layout"
import { MainStackScreen } from "@lib/routes/type"

// TODO Tab Navigator here
const HomeScreen = ({}: MainStackScreen<"Home">) => {
  return (
    <BaseScreen>
      <Text>HomeScreen</Text>
    </BaseScreen>
  )
}

export default HomeScreen
