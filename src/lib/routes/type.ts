import { RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type MainStackNavigation = NativeStackNavigationProp<MainNavigatorStack>
export type MainStackScreen<RouteName extends keyof MainNavigatorStack> = {
  route: RouteProp<MainNavigatorStack, RouteName>
  navigation: MainStackNavigation
}

type CommonNavigation = {
  NotFound: undefined
  ErrorPage: undefined
}

export type MainNavigatorStack = CommonNavigation & {
  Home: undefined
}

export type AuthNavigationStack = CommonNavigation & {
  SignIn: undefined
  Register: undefined
}
