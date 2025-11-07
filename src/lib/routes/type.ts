import { RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

type CommonNavigation = {
  NotFound: undefined
  ErrorPage: undefined
}

export type MainNavigatorStack = CommonNavigation & {
  Home: undefined
}
export type MainStackNavigation = NativeStackNavigationProp<MainNavigatorStack>
export type MainStackScreen<RouteName extends keyof MainNavigatorStack> = {
  route: RouteProp<MainNavigatorStack, RouteName>
  navigation: MainStackNavigation
}

export type AuthNavigationStack = CommonNavigation & {
  Login: undefined
  Register: undefined
}
export type AuthStackNavigation = NativeStackNavigationProp<AuthNavigationStack>
export type AuthStackScreen<RouteName extends keyof AuthNavigationStack> = {
  route: RouteProp<AuthNavigationStack, RouteName>
  navigation: AuthStackNavigation
}
