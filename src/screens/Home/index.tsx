import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import MainTabScreen from "./Main"
import ProfileTabScreen from "./Profile"
import { TabsParamList } from "./type"

const Tab = createBottomTabNavigator<TabsParamList>()

const TabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={MainTabScreen} />
      <Tab.Screen name="Profile" component={ProfileTabScreen} />
    </Tab.Navigator>
  )
}

export default TabsNavigator
