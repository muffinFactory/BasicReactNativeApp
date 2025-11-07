import { Text } from "react-native"

import { BaseScreen } from "@components/layout"
import { AuthStackScreen, MainStackScreen } from "@lib/routes/type"

// Generic Error Screen
const ErrorScreen = ({}: MainStackScreen<"ErrorPage"> | AuthStackScreen<"ErrorPage">) => {
  return (
    <BaseScreen>
      <Text style={{ alignSelf: "center", marginTop: "10%" }}>
        We are currently experiencing technical difficulties
      </Text>
    </BaseScreen>
  )
}

export default ErrorScreen
