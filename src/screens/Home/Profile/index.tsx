import { Text } from "react-native"

import { BaseScreen } from "@components/layout"

import { HomeTabScreen } from "../type"

const ProfileTabScreen = ({ navigation }: HomeTabScreen<"ProfileTab">) => {
  return (
    <BaseScreen>
      <Text style={{ alignSelf: "center", marginTop: "10%" }}>Profile</Text>
      <Text onPress={() => navigation.navigate("ErrorPage")}>Test</Text>
    </BaseScreen>
  )
}

export default ProfileTabScreen
