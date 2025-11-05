import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "@screens/Home"

import { MainNavigatorStack } from "../lib/routes/type"

const Stack = createNativeStackNavigator<MainNavigatorStack>()

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default MainNavigator
