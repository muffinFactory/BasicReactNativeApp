import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ErrorScreen from "@screens/Error"
import HomeScreen from "@screens/Home"

import { MainNavigatorStack } from "../lib/routes/type"

const Stack = createNativeStackNavigator<MainNavigatorStack>()

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ErrorPage" component={ErrorScreen} />
    </Stack.Navigator>
  )
}

export default MainNavigator
