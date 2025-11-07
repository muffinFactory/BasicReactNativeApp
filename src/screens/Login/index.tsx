import { SafeAreaView, Text } from "react-native"
import { Button, StyleSheet, TextInput, View } from "react-native"

import { Controller, useForm } from "react-hook-form"
import { KeyboardAvoidingView } from "react-native-keyboard-controller"

import { BaseScreen } from "@components/layout"
import DismissKeyboardView from "@components/layout/DismissKeyboardView"
import { AuthStackScreen } from "@lib/routes/type"
import { setAppState } from "src/state/app"
import { useAppDispatch } from "src/state/store"

const LoginScreen = ({}: AuthStackScreen<"Login">) => {
  const dispatch = useAppDispatch()

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: ""
    }
  })

  const onSubmit = (data: any) => {
    console.log("data", data)
    dispatch(setAppState("main"))
  }

  return (
    <BaseScreen>
      <DismissKeyboardView>
        <View style={{ position: "absolute", top: "10%", left: 0, right: 0 }}>
          <Text style={{ alignSelf: "center", marginTop: "15%" }}>Login Form</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.025)" }}>
          <View style={{ flex: 1 }} />
          <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={50}>
            <View style={styles.form}>
              <Controller
                control={control}
                name="username"
                rules={{ required: false }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    accessibilityLabel="Text input field"
                    style={styles.input}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Username"
                  />
                )}
              />
              <Controller
                control={control}
                name="password"
                rules={{ required: false }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    accessibilityLabel="Text input field"
                    style={styles.input}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Password"
                    secureTextEntry
                  />
                )}
              />
              <Button title="Login" onPress={handleSubmit(onSubmit)} />
            </View>
          </KeyboardAvoidingView>
        </View>
      </DismissKeyboardView>
      <SafeAreaView />
    </BaseScreen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  form: {
    width: "80%",
    alignSelf: "center",
    marginTop: 20
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10
  }
})
