module.exports = {
  presets: ["module:@react-native/babel-preset", "nativewind/babel"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@assets": "./assets",
          "@components": "./src/components",
          "@lib": "./src/lib",
          "@provider": "./src/provider",
          "@services": "./src/services",
          "@screens": "./src/screens",
          "@storage": "./src/storage",
          "@ui": "./src/ui",
          "@types": "./src/types",
          src: "./src"
        },
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
      }
    ],
    "react-native-worklets/plugin"
  ]
}
