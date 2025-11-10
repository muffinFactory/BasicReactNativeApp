import { Button, SafeAreaView, Text, TextInput, View } from "react-native"

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
    defaultValues: { username: "", password: "" }
  })

  const onSubmit = (data: any) => {
    console.log("data", data)
    dispatch(setAppState("main"))
  }

  return (
    <BaseScreen>
      <DismissKeyboardView>
        {/* Title */}
        <View className="absolute top-[10%] left-0 right-0">
          <Text className="self-center mt-[15%] text-xl font-semibold">Login Form</Text>
        </View>

        {/* Background area */}
        <View className="flex-1 bg-black/5">
          <View className="flex-1" />

          <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={50}>
            {/* Form */}
            <View className="w-4/5 self-center mt-5">
              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    className="h-10 border border-gray-300 rounded mb-2 px-3 bg-white"
                    placeholder="Username"
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    className="h-10 border border-gray-300 rounded mb-3 px-3 bg-white"
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={onChange}
                    value={value}
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
