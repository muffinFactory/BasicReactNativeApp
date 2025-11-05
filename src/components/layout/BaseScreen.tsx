import React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"

type Props = {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

const BaseScreen = ({ style, children }: Props) => {
  return <View style={[styles.container, style]}>{children}</View>
}

export default BaseScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
