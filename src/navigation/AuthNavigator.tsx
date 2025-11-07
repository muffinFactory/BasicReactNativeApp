import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ErrorScreen from "@screens/Error"
import LoginScreen from "@screens/Login"

import { AuthNavigationStack } from "../lib/routes/type"

const Stack = createNativeStackNavigator<AuthNavigationStack>()

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ErrorPage" component={ErrorScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
