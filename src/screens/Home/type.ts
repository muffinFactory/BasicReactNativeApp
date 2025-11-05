import { RouteProp } from "@react-navigation/native"

import { MainStackNavigation } from "@lib/routes/type"

// TODO Define the tab routes later
export type TabsParamList = {
  Home: undefined
  Profile: undefined
}

export type HomeTabScreen<RouteName extends keyof TabsParamList> = {
  route: RouteProp<TabsParamList, RouteName>
  navigation: MainStackNavigation
}
