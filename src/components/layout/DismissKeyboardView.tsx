import React from "react"
import { Keyboard, TouchableWithoutFeedback, View } from "react-native"

interface DismissKeyboardViewProps {
  children: React.ReactNode
}

const DismissKeyboardView: React.FC<DismissKeyboardViewProps> = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }}>{children}</View>
    </TouchableWithoutFeedback>
  )
}

export default DismissKeyboardView
