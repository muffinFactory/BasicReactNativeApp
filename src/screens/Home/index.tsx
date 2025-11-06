import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import MainTabScreen from "./Main"
import ProfileTabScreen from "./Profile"
import { TabsParamList } from "./type"

const Tab = createBottomTabNavigator<TabsParamList>()

const TabsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="HomeTab" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeTab" component={MainTabScreen} />
      <Tab.Screen name="ProfileTab" component={ProfileTabScreen} />
    </Tab.Navigator>
  )
}

export default TabsNavigator
