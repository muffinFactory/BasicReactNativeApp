import { Text } from "react-native"

import { BaseScreen } from "@components/layout"

import { HomeTabScreen } from "../type"

const ProfileTabScreen = ({}: HomeTabScreen<"Profile">) => {
  return (
    <BaseScreen>
      <Text style={{ alignSelf: "center", marginTop: "10%" }}>Profile</Text>
    </BaseScreen>
  )
}

export default ProfileTabScreen
