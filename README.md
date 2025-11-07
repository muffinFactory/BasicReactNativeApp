# React Native Bootstrap

Stack and Requirement :

- Node v20.18.3
- Java 17
- React-Native v0.79.3
- React-Navigation v7
- Redux-Toolkit v2
- React-Query v5
- react-native-mmkv v4.0 (Storage)
- react-native-reanimated v4
- react-native-bootsplash
- react-native-vector-icons

## Setup

- `npm i`
- if java 17 is already installed but not default, change your java 17 path at `android/gradle.properties` using `/usr/libexec/java_home -v 17`
- Rename the app

### Rename App

- run `npx react-native-rename "YourNewAppName" -b "com.yournewapp.domain"`

#### Note: this may not always work

- Make sure to check old .xcodeproj and .xcworkspace in ios folder, please delete them manually.
- Please make sure to run "npx pod-install" and "watchman watch-del-all" before running the app.

### Splashscreen

- create your logo at assets/images/logo.png
- run `npx react-native-bootsplash generate assets/images/logo.png --platforms=android,ios --background=F5FCFF --logo-width=100 --assets-output=assets/bootsplash`
