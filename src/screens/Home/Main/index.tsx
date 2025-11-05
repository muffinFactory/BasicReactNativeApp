import { Text } from "react-native"

import { BaseScreen } from "@components/layout"

import { HomeTabScreen } from "../type"

const MainTabScreen = ({}: HomeTabScreen<"Home">) => {
  return (
    <BaseScreen>
      <Text style={{ alignSelf: "center", marginTop: "10%" }}>HomeScreen</Text>
    </BaseScreen>
  )
}

export default MainTabScreen
